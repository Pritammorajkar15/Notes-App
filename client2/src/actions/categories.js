import axios from 'axios'
export const setCategoryList=(categories)=>{
    return {type:"SET_CAT",payload:categories}
}
export const startSetCategoryList=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3025/categories',{headers:{'x-auth':localStorage.getItem('token')}})
        .then((response)=>{
           const categories=response.data
            dispatch(setCategoryList(categories))
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}

export const setCategoryRemove=(id)=>{
return {type:"CAT_REMOVE",payload:id}
}
export const startSetCategoryRemove=(id)=>{
return (dispatch)=>{
    axios.delete(`http://localhost:3025/categories/${id}`,
    {headers:{'x-auth':localStorage.getItem('token')}}
    )
    .then((response)=>{
        dispatch(setCategoryRemove(response.data._id))

        })
    }
}

export const categoryNew=(category)=>{
    return{type:"ADD_CATEGORY",payload:category}
    }
    export const startCategoryNew=(formData,props)=>{
        return (dispatch)=>{
            axios.post('http://localhost:3025/categories',formData,{
        headers:{
            'x-auth':localStorage.getItem('token')
    
        }
    })
    .then((response)=>{
        console.log("abc",response.data)
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }
        else{
             const category=response.data
             dispatch(categoryNew(category))
            //console.log(response.data)
            // const note=response.data
            //const id=response.data._id
           
            props.history.push(`/categoriesshow/${category._id}`)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    
        }
    }

    export const categoryEdit=(category)=>{
        return {type:"EDIT_CAT",payload:category}
        }
        export const startCategoryEdit=(formData,props)=>{
            return (dispatch)=>{
                axios.put(`http://localhost:3025/categories/${props.match.params.id}`,formData,{
                                headers:{'x-auth':localStorage.getItem('token')}
                            })
                            .then((response)=>{
                                if(response.data.hasOwnProperty('errors')){
                                    alert(response.data.errors.message)
                                }
                                else{
                                    const category=response.data
                                    dispatch(categoryEdit(category))
                                    props.history.push('/categorylist')
                                   
                                }
                            })
                            .catch((err)=>{
                                console.log(err)
                            }) 
        
            }
        }

