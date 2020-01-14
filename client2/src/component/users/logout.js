import React from 'react'
import {connect} from 'react-redux'
import {startLogOutUser} from '../../actions/users'

function Logout(props){
   props.dispatch(startLogOutUser(props))
    
    
    
       return(
           <div>
               
               
        
           </div>
       )
       }
       export default connect()(Logout)
