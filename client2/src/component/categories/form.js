import React from 'react'
import {Jumbotron} from 'reactstrap'

export default class CategoriesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={


name:props.name ? props.name:''

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
           name:this.state.name
        }
        this.props.handleSubmit(formData)

    }
    
    render(){
        return(
            <div align="center" className="form-group">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <Jumbotron style={{"background-color":"#5cb85c"}}>
    <form onSubmit={this.handleSubmit}>
        <label>
            Title:
            <br></br>
            <input type="text" className="form_item" value={this.state.name} onChange={this.handleChange} name="name"/>
        </label>
        <br></br>
        
        <input type="submit"  className="btn-btn-primary"/>
    </form>
    </Jumbotron>
    </div>
    
             </div>   
            </div>
        )
    }
}
