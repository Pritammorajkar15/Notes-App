import React from 'react'
import {Jumbotron} from 'reactstrap'
import CategoriesForm from  './form'
import {startCategoryNew} from '../../actions/categories'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
function CategoriesNew(props){
   
    const handleSubmit=(formData)=>{
        props.dispatch(startCategoryNew(formData,props))


    }
    
        return(
            <div className="row">
                <div className="col-md-6 offset-md-5">
                    <div align="center">
            <br></br>
            <Jumbotron style={{"background-color":"#5cb85c"}}>
                <h2>Add category</h2>
                <CategoriesForm  handleSubmit={handleSubmit}/>
                <Link to ="/home" className="btn btn-secondary">back</Link>
                </Jumbotron>
                </div>
            </div>
            </div>
        )
    
}
export default connect()(CategoriesNew)