import React from 'react'
import Axios from 'axios'
import { Jumbotron } from 'reactstrap'

export default class NotesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={

body:props.body ? props.body:'',
title:props.title ? props.title:'',
category:props.category ? props.category:'',
categories:[]

        }
    }
   
    componentDidMount(){
        Axios.get('http://localhost:3025/categories',{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then((response)=>{
            console.log("categories",response.data)
            const categories=response.data
            this.setState({categories})
        })
        .catch((err)=>{
            console.log(err)
        })
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
            title:this.state.title,
            body:this.state.body,
            category:this.state.category
            
        }
        this.props.handleSubmit(formData)

    }
    
    render(){
        return(
            <div align="center" className="form-group">
              
                <Jumbotron style={{"background-color":"#fdd0e4"}} >
    <form  onSubmit={this.handleSubmit}>
        <label>
            Title:
            <br></br>
            <input type="text" className="form-item" value={this.state.title} onChange={this.handleChange} name="title"/>
        </label>
        <br></br>
        <label>
            Body:
            <br></br>
            <input type="text" className="form-item" value={this.state.body} onChange={this.handleChange} name="body"/>
        </label>
        <br></br>
        
        <label>Category:
        <br></br>
    <select name="category" className="form-item" onChange={this.handleChange}>
        <option value='select'>select</option>
        {
            this.state.categories.map((category)=>{
                return <option key={category._id} value={category._id}>{category.name}</option>
            })
        }
    </select>
</label>
<br></br>
        <input type="submit" className="btn btn-primary"/>
    </form>
    </Jumbotron> 
            </div>
        )
    }
}
