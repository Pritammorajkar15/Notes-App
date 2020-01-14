import React from 'react' 
import CategoriesForm from './form'
import {startCategoryEdit} from '../../actions/categories'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Jumbotron} from 'reactstrap'
function CategoryEdit(props){
    
    const handleSubmit=(formData)=>{
        props.dispatch(startCategoryEdit(formData,props))
       
    }
   
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div align="center">
                    <br></br>
                    <Jumbotron style={{"background-color":"#5cb85c"}}>
                <h2>{props.category.name}</h2>
                {Object.keys(props.category).length!==0 && 
                <CategoriesForm {...props.category} handleSubmit={handleSubmit}/>}
                <Link to ="/categorylist" className="btn btn-primary">back</Link>
                </Jumbotron>
                </div>
                </div>
            </div>
        )
    
}
const mapStateToProps=(state,props)=>{
    return {category:state.categories.find(c=>c._id==props.match.params.id)}
}
export default connect(mapStateToProps)(CategoryEdit)