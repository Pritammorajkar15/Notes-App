// import axios from 'axios'


// // export const setNotes=(notes)=>{
// //     return {
// //            type:'LIST_NOTES',
// //            payload:notes
// //     }
// //    }
// //    export const startSetNotes=()=>{
// //    return (dispatch)=>{
// //        axios.get('http://localhost:3025/notes',{
// //            headers:{
// //                'x-auth':localStorage.getItem('authToken')
// //            }
// //        })
// //        .then((response)=>{
// //            const notes=response.data
// //           dispatch(setNotes(notes))
// //        })
// //        .catch((err)=>{
// //            //alert(err)
// //            console.log(err)
// //        })
// //    }
// //    }
// export const notesRemove=(id)=>{
//     return{type:"REMOVE_NOTES",payload:id}
// }
// export const startNotesRemove=(id)=>{
//     return (dispatch)=>{
        
//             axios.delete(`http://localhost:3025/notes/${id}`,
//         {headers:{'x-auth':localStorage.getItem('authToken')}}
//         )
//         .then((response)=>{
//             dispatch(startNotesRemove(response.dataid))
            
//         })

//     }
// }
// export const notesNew=(note)=>{
// return{type:"ADD_NOTE",payload:note}
// }
// export const startNotesNew=(formData,props)=>{
//     return (dispatch)=>{
//         axios.post('http://localhost:3025/notes',formData,{
//     headers:{
//         'x-auth':localStorage.getItem('authToken')

//     }
// })
// .then((response)=>
// {
//     //console.log(response.data)
//     if(response.data.hasOwnProperty('errors')){
//         alert(response.data.message)
//     }
//     else{
//         // const note=response.data
//         const id=response.data._id
//         dispatch(notesNew(response.data))
//         props.history.push(`/show/${id}`)
//     }
// })
// .catch((err)=>{
//     console.log(err)
// })

//     }
// }
// export const notesEdit=(note)=>{
// return {type:"EDIT_NOTE",payload:note}
// }
// export const startNotesEdit=(formData,props)=>{
//  axios.put(`http://localhost:3025/notes/${props.match.params.id}`,formData,{
//             headers:{'x-auth':localStorage.getItem('authToken')}
//         })
//         .then((response)=>{
//             if(response.data.hasOwnProperty('errors')){
//                 alert(response.data.errors.message)
//             }
//             else{
//                 const note=response.data
//                 dispatch(notesEdit(note))
//                 props.history.push('/list')
//                 console.log(note)
//             }
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//  }