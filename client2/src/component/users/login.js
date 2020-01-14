import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/users'
import {Jumbotron} from 'reactstrap'
 class Login extends React.Component{
    constructor()
    {
        super()
        this.state={
           
            email:"",
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleSubmit=(e)=>
    {
e.preventDefault()
const formData={
    
    email:this.state.email,
    password:this.state.password
}

this.props.dispatch(startLoginUser(formData,this.props))
// Axios.post('http://localhost:3025/users/login',formData)
// .then((response)=>
// {
//     if(response.data.hasOwnProperty('error')){
//         alert(response.data.message)
//     }
//     else{
//         console.log(response)
//         localStorage.setItem('authToken', response.data.token)
//         alert('successfully logged in')
//         this.props.history.push('/home')
//     }
// })
// .catch((err)=>
// {
//     console.log(err)
// })

//this.setState({formData})
    }


    render(){
        return(
            <div className="row">
            
                <div className="col-md-6 offset-md-3">
                <div align="center" >
                <br></br>
                    <Jumbotron style={{"background-color":"#fdd0e4"}}>
                
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>
                        email:
                        <br></br>
                        <input type="text" className="form-item" value={this.state.email} onChange={this.handleChange} name="email"/>
                        
                    </label>
                    <br></br>
                    <label>
                        password:
                        <br></br>
                        <input type="password" className="form-item" value={this.state.password} onChange={this.handleChange} name="password"/>
                        
                    </label>
                    <br/><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
                </Jumbotron>
                </div>
                </div>
            </div>
        )
    }
}

export default connect()(Login)