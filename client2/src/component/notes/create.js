// import React from 'react'
// import Axios from 'axios'

// export default class Create extends React.Component{
//     constructor(){
//         super()
//         this.state={

// body:'',
// title:'',
// category:'',
// categories:[]

//         }
//     }
//     componentDidMount(){
//         Axios.get('http://localhost:3025/categories',{headers:{
//             'x-auth':localStorage.getItem('authToken')
//         }})
//         .then((response)=>{
//             categories=response.data
//             this.setState({categories})
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     data=(e)=>{
//         const id=this.props.match.params.id
//         e.preventDefault()
//         const formData={
//             title:this.state.title,
//             body:this.state.body,
//             category:this.state.category,
//             categories:this.state.categories
//         }
//         Axios.post('http://localhost:3025/notes',formData,
//         {headers:{'x-auth':localStorage.getItem('authToken')}})
//         .then((response)=>
//         {
            
//                 if(response.data.hasOwnProperty('error')){
//                     alert(response.data.message)

//                 }
//                 else{
//                     // console.log(response.data)
//                     const id=response.data._id
//                     console.log(id)
//                     alert('successfully logged in')
//                     this.props.history.push(`/show/${id}`)
//                 }
            

            
//         })
//         .catch((err)=>{
//             alert(err)
//         })



//     }
    
    
//     handleChange=(e)=>{
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
    
    
//     render(){
//         return(
//             <div>
//     <form onSubmit={this.data}>
//         <label>
//             title:
//             <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
//         </label>
//         <label>
//             body:
//             <input type="text" value={this.state.body} onChange={this.handleChange} name="body"/>
//         </label>
//         <label>
//             <select>
//                 {
//                     this.state.categories.map((category)=>{
//                         <option></option>
//                     })
//                 }
//             </select>
//         </label>
//         <input type="submit"/>
//     </form>
                
//             </div>
//         )
//     }
// }
