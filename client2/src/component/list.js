import React from 'react'
import Axios from 'axios'

class List extends React.Component{
    constructor(){
        super()
        this.state={
notes:[]
        }
    }

    componentDidMount(){
        Axios.get('localhost:3025/notes')
        .then((response)=>
        {
            notes=response.data
            this.setState({notes})

        })
        .catch((err)=>{
            console.log(err)
        })
    }
   render(){
       return(
             <div>
<h2>Notes</h2>

             </div>
           
       )
   } 

}
export default List