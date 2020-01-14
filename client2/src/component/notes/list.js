import React from 'react'
import {Jumbotron} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {startNotesRemove} from '../../actions/notes2'
function List(props){

     const handleRemove=(id)=>
     {
      props.dispatch(startNotesRemove(id))
    
}
    
      
        
        return(
            
            <div className="row">
              <div className="col-md-5 offset-md-3">  
              <Jumbotron  style={{"background-color":"#fdd0e4"}}>
    <h1 className="text-center">Notes: {props.notes.length}</h1>
    <table border="2" className="table table-dark" >
       <thead>
           <tr>
               <th>title</th>
               <th>show</th>
               <th>remove</th>
           </tr>
       </thead>
       <tbody>
           {
               props.notes.map((note,index)=>{
                return <tr key={index}>
               <td>{note.title}</td>
               <td> <Link to={`/show/${note._id}`} className="btn btn-primary">show</Link></td>
               <td> <button onClick={()=>{handleRemove(note._id)}} className="btn btn-danger">Remove</button></td>
                </tr>
                })

           }
       </tbody>
    </table>
                    <div align="center">
                <Link to='/new' className="btn btn-primary">add notes</Link>
                <br></br>
                <Link to="/home" className="btn btn-secondary">Back</Link>
                </div>
                </Jumbotron>
                </div>   
            </div>
        )
            }

const mapStateToProps=(state)=>{

return{notes:state.notes}
}
export default connect(mapStateToProps)(List)