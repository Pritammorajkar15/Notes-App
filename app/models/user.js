
const mongoose=require('mongoose')
const bcryptjs=require('bcryptjs')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const Schema=mongoose.Schema
const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:5

    },
    email:{
        type:String,
        required:true,
        unique:true,
        //custom validations
        validate:{
            validator:function(value){ //value is my email as defined in validator.js
                return validator.isEmail(value)

            },
            message:function() {
                return 'invalid email format'
                
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:128
    },
    tokens:[
        {
            token:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now()
            }
    }
        
    ]
})
//


//prehooks
UserSchema.pre('save',function(next){
    const user=this
    if(user.isNew){
        bcryptjs.genSalt(10)
    .then(function(salt){
        bcryptjs.hash(user.password,salt)
        .then(function(encrypted){
            user.password=encrypted
            next()
        })
    })
    }
    else{
        next()
    }

})

UserSchema.statics.findByCredentials=function(email,password){
    const user=this
    return user.findOne({email})
    .then(function(user){
        if(!user)
        {
            return Promise.reject('invalid')
        }
        else{
            return bcryptjs.compare(password,user.password)
            .then(function(result){
                if(result){
                    return Promise.resolve(user)
                }
                else{
                    return Promise.reject('invalid')
                }
            })
        }
    })
    .catch(function(err){
        return Promise.reject(err)
    })
}
UserSchema.methods.generateToken=function(){
    const user=this
    const tokenData={
        _id:user._id,
        username:user.username,
        createdAt:Number(new Date())
    }
    const token=jwt.sign(tokenData,'jwt@123')
    user.tokens.push({token})
    return user.save()
    .then(function(user){
        return Promise.resolve(token)
    })
    .catch(function(err){
        return Promise.reject(err)
    })
}
UserSchema.statics.findByToken=function(token){
    const user=this
    let tokenData
    try{
        tokenData=jwt.verify(token,'jwt@123')
    }
    catch(err){
        return Promise.reject(err)
    }
    return user.findOne({
        _id:tokenData._id,
        'tokens.token':token
    })
}



const User=mongoose.model('User',UserSchema)
module.exports={
    User
}