import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetCategoryRemove} from '../../actions/categories'
import {Jumbotron} from 'reactstrap'
 function CategoryList(props){
    
    const handleRemove=(id)=>
    {
        props.dispatch(startSetCategoryRemove(id))
    
}


    
        return(
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <Jumbotron style={{"background-color":"#5cb85c"}}>
    <h2>category list:{props.categories.length}</h2>
                <table border="2" className="table table-dark">
                    <thead>
                        <tr>
                            <th>category</th>
                            <th>show</th>
                            
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           props.categories.map((cat)=>
                           {
                               return(
                               <tr key={cat._id}>
                                   <td>{cat.name}</td>
                           <td><Link to={`/categoriesshow/${cat._id}`} className="btn btn-primary">Show</Link></td>
                           
                               <td><button onClick={()=>{handleRemove(cat._id)}} className="btn btn-danger">Remove</button></td>
                               
                               </tr>
                                

                               )
                           })
                       }
                    </tbody>
                </table>
                <div align="center">
                <Link to='/categoriesnew' className="btn btn-success">Add categories</Link>
                <br></br>
                <Link to="/home" className="btn btn-secondary">Back</Link>
                </div>
                </Jumbotron>
                </div>
            </div>
        )
    
}
const mapStateToProps=(state)=>{
    return {categories:state.categories}
}
export default connect(mapStateToProps)(CategoryList)