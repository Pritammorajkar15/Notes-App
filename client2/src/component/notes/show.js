import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Jumbotron} from 'reactstrap'
 function Show(props){

   
        
        const id=props.match.params.id
         const{title,body}=props.note
        return(

            <div className="row" >
                <div className="col-md-6 offset-md-3">
                    <div align="center">
                    <br></br>
                   <Jumbotron style={{"background-color":"#fdd0e4"}}>
                       <br></br>
                <h1 className="text-center">Notes</h1>
<center>
               
    <h2>{title}-{body}</h2>

        {/* <li>{this.state.note.title}-{this.state.note.body}</li> */}
        
    <Link to={`/edit/${id}`} className="btn btn-primary">Edit notes</Link>
<br></br>
<Link to ="/home" className="btn btn-secondary">back</Link>

                    
</center>
                
                </Jumbotron>  
                </div>  
                 </div>                
            </div>
        )
    
}
const mapStateToProps=(state,props)=>{
    console.log('mapstate', props)
    return {note:state.notes.find(n=>n._id==props.match.params.id)}
}
export default connect(mapStateToProps)(Show)
