import Axios from 'axios'
import swal from 'sweetalert'
export const setUsers =(user={})=>
{
     console.log("setusers",user)
     return {type:"SET_USER",payload:user}

}
export const StartRegisterUser=(formData,props)=>
{
        return (dispatch)=>
        {

        Axios.post('http://localhost:3025/users/register',formData)
            .then((response)=>
            {

                if(response.data.hasOwnProperty('error'))
                {
                    alert(response.data.message)
                }
                else{

                    console.log('response in register', response.data)
                    alert('successfully registered')
                    dispatch(setUsers())
                    props.history.push('/users/login')
                    
                    }
            
                })
                .catch((err)=>
                {
                    console.log(err)
                })
             }
         }

export const startLoginUser=(formData,props)=>
{
    return(dispatch)=>
    {
        Axios.post('http://localhost:3025/users/login',formData)
        .then((response)=>
{
    if(response.data.hasOwnProperty('error'))
    {
        alert(response.data.message)
    }
    else
    {
        // console.log(response)
        //console.log("response after login",response.data)
        const token=response.data.token
       
        localStorage.setItem('token', token)

        Axios.get('http://localhost:3025/users/account',{
           headers:{'x-auth':token}})
           .then((response)=>{
               console.log('login--user',response.data)
           alert('successfully logged in')
            
           props.history.push('/home')
           window.location.reload(false)
        })
           .catch((err)=>{
               console.log(err)
           })
           
        
       
    }
})
.catch((err)=>
{
    console.log(err)
})

    }
}

export const startGetUser=()=>
{
   
    return (dispatch)=>
    {
        Axios.get('http://localhost:3025/users/account',{headers:{'x-auth':localStorage.getItem('token')}})
            .then((response)=>
            {
               
                // if(!response.data.hasOwnProperty('notice'))
                // {
                    
                    dispatch(setUsers(response.data))
                   // window.location.href='/users/login'
                //}
            })
            .catch((err)=>
            {
                console.log(err)
            })
    }
}


export const startLogOutUser=(props)=>{
    return(dispatch)=>{
        
        Axios.delete('http://localhost:3025/users/logout',{headers:{'x-auth':localStorage.getItem('token')}})
        .then((response)=>{
            if(response.data.hasOwnProperty('error')){
                alert(response.data.message)
            }
            else{
                dispatch(setUsers({}))
                localStorage.clear()
                swal({
                    title: "Are you sure you want to log out?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Successfully Logged out", {
                        icon: "success",
                       
                      });
             
          }
      })
                //alert('successfully logged out')
                props.history.push('/users/login')
               
                    
    }
})
}
}

