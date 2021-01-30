import React from 'react'
import {Link,NavLink,useLocation} from 'react-router-dom';

function NavigationBar() {
  
  const buttonStyle={
    width:"100px" ,
    marginTop:"10px",
    marginLeft:"5px"
  }
  let location= useLocation();
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <Link className="navbar-brand" to="/">Bendita Empanada</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      

      <li className="nav-item ml-auto ">
        <NavLink 
        
        className="btn btn-primary "
        style={buttonStyle}
        to="/"
        exact>
          Home
        </NavLink>
        </li>
      <li className="nav-item ml-auto" >
      <NavLink 
      
      className="btn btn-primary "
      style={buttonStyle}
      to="/empresa"
      exact
      >
          Empresa
        </NavLink>
      </li>      
      <li className="nav-item ml-auto" >
      <NavLink 
      
      className="btn btn-primary "
      style={buttonStyle}
      to="/productos"
      exact>
          Productos
        </NavLink>
      </li>
      <li className="nav-item ml-auto" >

        {
          location.pathname!=="/" ?
          <NavLink 
          
      className="btn btn-primary "
      style={buttonStyle}
      to="/"
      href="#contact"
      exact>
          Concat
        </NavLink>:

        <a
        
        className="btn btn-primary "
        style={buttonStyle}
        href="#contacto"
        >
            Contact
          </a>

          
        }
      
      </li>
      
    </ul>
    
  </div>
</nav>
     

    )
}

export default NavigationBar
