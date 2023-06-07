import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className='oppoo'>
   <nav className={`navbar navbar-${props.mode } bg-${props.mode } navbar-expand-lg`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/ ">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        </ul>


{/* Function for Test & I accepted this challengage */}
        {/* <div className={`form-check  text-${props.mode === 'light' ? 'dark' : 'light'}  form-switch`}>
        <input className="form-check-input " onClick={props.toggleModee} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Sky Blue </label>
        </div> */}
{/* Function for Test & I accepted this challengage */}

         <div className={`form-check mx-5 text-${props.mode === 'light' ? 'dark' : 'light'}  form-switch`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Gray </label>
</div> 
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
      
      
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes= { title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired }
    
 Navbar.defaultProps ={
    title:'Set Title Here',
    aboutText:"About "
}

export default Navbar

/*



*/