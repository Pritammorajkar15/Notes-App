import React from 'react' 
import NotesForm from './form'
import {connect} from 'react-redux'
import {startNotesEdit} from '../../actions/notes2'
import {Link} from 'react-router-dom'
import {Jumbotron} from 'reactstrap'
function Edit(props){
    
   const  handleSubmit=(formData)=>{
        props.dispatch(startNotesEdit(formData,props))
        
    }
    
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div align="center">
                    <br></br>
                    <Jumbotron style={{"background-color":"#fdd0e4"}}>
                <h2>{props.note.title}</h2>
                {Object.keys(props.note).length!==0 && 
                <NotesForm {...props.note} handleSubmit={handleSubmit}/>}
                <Link to ="/list" className="btn btn-success" >back</Link>
                </Jumbotron>
                </div>
                </div>
            </div>
        )
    
}
const mapStateToProps=(state,props)=>{
    return{note:state.notes.find(n=>n._id==props.match.params.id)}
}
export default connect(mapStateToProps)(Edit)
