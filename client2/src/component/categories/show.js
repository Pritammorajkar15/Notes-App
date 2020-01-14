import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'
function CategoryShow (props){
    
    // componentDidMount(){
    //     const id=this.props.match.params.id
    //     Axios.get(`http://localhost:3025/categories/${id}`,
    //     {headers:{'x-auth':localStorage.getItem('authToken')}})
    //     .then((response)=>{
    //        const category=response.data
    //        const notes=category.notes
    //         this.setState({category,notes})
    //         console.log('hii',notes)
    //         console.log(category)
            
    //     })
    //     .catch((err)=>
    //     {
    //         alert(err)
    //     })
    // }
  
        const id=props.match.params.id
        return(
            
                <div className="row">
                    <div className="col-md-5 offset-md-3">
                        <Jumbotron style={{"background-color":"#5cb85c"}}>
                <center>
                <h1 className="text-center">Categories</h1>

                <hr></hr>
               {(props.category)&&<h2>Category:- {props.category.name}</h2>}
               
                    {
                        (Object.keys(props.category).length!==0) && 
                        <div align="center">
                        <h3>Notes</h3>
                        <table className="table table-dark">
                        <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                         </thead>
                          <tbody>
                        {
                    props.notes.map((note,index)=>{
                            return(
                
                                            <tr key={index}>
                                                <td>{note.title}</td>
                                                <td>{note.body}</td>
                                            </tr>
                                       
                                   
                                
                               
                      
                            )
                        })
        
                    
                        
                    }
                     </tbody>
                     </table>
                    
                    </div>
                    
                    }
                        
                    
                
    
    <Link to={`/categoriesedit/${id}`} className="btn btn-warning">Edit category</Link>
<br></br>
<Link to ="/home" className="btn btn-secondary">back</Link>

                    
 
                

                </center>  
                </Jumbotron>
                </div> 
            </div>
        )
    }
    const mapStateToProps=(state,props)=>{
        console.log('mapstate', props)
        return {
            notes:state.notes.filter((note)=>{
                console.log("category show",note)
                return note.category._id==props.match.params.id
            }),
        
         category:state.categories.find(n=>n._id==props.match.params.id)
        }
    }
    export default connect(mapStateToProps)(CategoryShow)

