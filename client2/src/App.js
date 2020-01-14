import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import {
       Collapse,
       Navbar,
       NavbarToggler,
       NavbarBrand,
       Nav,
       NavItem,
       NavLink
      
     } from 'reactstrap'
     import {connect} from 'react-redux'
 import Register from './component/users/register'
  import Login from './component/users/login'
   import List from './component/notes/list'
  
   import Show from './component/notes/show'
   import Edit from './component/notes/edit'
   import NotesNew from './component/notes/new'
   import CategoryList from './component/categories/list'
  
   import CategoryShow from './component/categories/show'
   import CategoryEdit from './component/categories/edit'
   import CategoriesNew from './component/categories/newCategory'
   import Home from './component/home'
   import Logout from './component/users/logout'
   import './index.css'
   function App(props){
      console.log("App",props.user)

       return(  
        <BrowserRouter>
       <div>
      { 
      (localStorage.token) ?<div>

        <Navbar color="dark" light expand="md" className="mb-5">
        <NavbarBrand className="text-info" href="/">Notes App</NavbarBrand>
      

        {/* <Collapse  navbar> */}
          <Nav className="mr-auto" navbar>
             

            <NavItem>
              <NavLink className="text-info" href="/users/logout">Logout</NavLink>
            
            </NavItem>
          
           </Nav>
        </Navbar>
      </div> :<div>
        
      <Navbar color="dark" light expand="md">
        <NavbarBrand className="text-info" href="/">Notes App</NavbarBrand>
        
        <Nav className="mr-auto" navbar>
        <NavItem>
              <NavLink  className="text-info" href="/users/register">Register</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="text-info"  href="/users/login">Login</NavLink>
            </NavItem>
          
        </Nav>
       
      </Navbar>

        </div>
        }
      

      </div>       
          
         
      
            
             
    
               
                   
                       
                          
                      
{/* <Link to="/register">register</Link>||
               <Link to="/login">login</Link >||
               <Link to='/logout'>logout</Link> */}
               {/* <Link to="/home">Home</Link>||  */}
               {/* <Link to="/list"> Notes list</Link>|| 
               <Link to="/categorylist">category list</Link>|| */}
         


              
     <Switch>        
<Route path="/users/register" component={Register}/>     
<Route path="/users/login" component={Login}/>
<Route path="/users/logout" component={Logout}/>
<Route path='/home' component={Home} exact={true}/>

<Route path='/list' component={List} exact={true}/>



<Route path='/categoriesshow/:id' component={CategoryShow}/>
<Route path='/categoriesedit/:id' component={CategoryEdit}/>

<Route path='/show/:id' component={Show}/>
<Route path='/edit/:id' component={Edit}/>
<Route path='/new' component={NotesNew}/>
<Route path='/categoriesnew' component={CategoriesNew}/>


<Route path='/categorylist' component={CategoryList} exact={true}/>



</Switch> 



            
       </BrowserRouter>)

              }
const mapStateToProps=(state)=>{
  console.log("mapstatetoprops",state)
  return{
   user:state.users
  }
}

export default connect(mapStateToProps)(App)