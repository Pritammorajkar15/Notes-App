import React from 'react'
import {connect} from 'react-redux'
import {StartRegisterUser} from '../../actions/users'
import {Jumbotron} from 'reactstrap'
class Register extends React.Component{
    constructor()
    {
        super()
        this.state={
            username:'',
            email:"",
            password:'',
            
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
    username:this.state.username,
    email:this.state.email,
    password:this.state.password,
    errors:this.state.errors
}
this.props.dispatch(StartRegisterUser(formData,this.props))
// Axios.post('http://localhost:3025/users/register',formData)
// .then((response)=>
// {
//     if(response.data.hasOwnProperty('error')){
//         alert(response.data.message)
//     }
//     else{
      
//         alert('successfully registered')
//         this.props.history.push('/users/login')
//     }
// })
// .catch((err)=>
// {
//     console.log(err)
// })



// this.setState({formData})
    }


    render(){
       
        return(
            <div className="row">
           
                <div className="col-md-6 offset-md-3">
                <div align="center" >
                <br></br>
                    <Jumbotron style={{"background-color":"#fdd0e4"}}>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <br></br>
                        <input type="text" className="form-item" value={this.state.username} onChange={this.handleChange} name="username"/>
                       
                         
                    </label>
                    <br></br>
                    <label>
                        Email:
                        <br></br>
                        <input type="text" className="form-item" value={this.state.email} onChange={this.handleChange} name="email"/>
                       
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <br></br>
                        <input type="password" className="form-item" value={this.state.password} onChange={this.handleChange} name="password"/>
                       
                    </label>
                     <br/><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
                </Jumbotron>
            </div>
            </div></div>
        )
    }
}

export default connect()(Register)