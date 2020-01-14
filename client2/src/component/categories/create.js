import React from 'react'
import Axios from 'axios'

export default class CategoryCreate extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
        }
        handleChange=(e)=>
        {
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                name:this.state.name
            }
            Axios.post('http://localhost:3025/categories',formData,{
                headers:{'x-auth':localStorage.getItem('authToken')}
            })
            .then((response)=>
            {
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)

                }
                else{
                    // console.log(response.data)
                    const id=response.data._id
                   this.props.history.push(`/categoriesshow/${id}`)
                }
                
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name = "name"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}
