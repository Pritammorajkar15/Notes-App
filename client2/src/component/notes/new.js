import React from 'react'
import NotesForm from './form'
import {connect} from 'react-redux'
import {startNotesNew} from '../../actions/notes2'
import {Link} from 'react-router-dom'
function NotesNew(props){
    
    const handleSubmit=(formData)=>{
props.dispatch(startNotesNew(formData,props))

    }
    
        return(
            
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                <br></br>
                <center>
                <h2>Add Notes</h2>
                <NotesForm handleSubmit={handleSubmit} category={props.category}/>
                <br></br>
                <Link to ="/list" className="btn btn-secondary">back</Link>
                </center>
            </div>
            </div>
        
         
        )
    
    
        
    
}
const mapStateToProps=(state,props)=>{
    return {//note:state.notes,
            category:state.notes.find(category=>category._id==props.match.params.id)
    }
}


export default connect(mapStateToProps)(NotesNew)