const express=require('express')
const {configureDB}=require('./config/database')
const cors=require('cors')
const port=3025
const app=express()
const router=require('./config/routes')
app.use(express.json())
app.use(cors())
configureDB()



app.get('/',(req,res)=>{
    res.send('welcome to the notes app')
})

app.use('/',router)


app.listen(port,()=>{
    console.log('listning on port' ,port)
})