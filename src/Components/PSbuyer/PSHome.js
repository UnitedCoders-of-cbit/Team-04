import React from 'react'
import { useNavigate ,Link , Outlet} from 'react-router-dom';

export default function PSBuyerHome() {
    let company=localStorage.getItem("company");
    const navigate =useNavigate()
    const handlelogout=(a)=>{
      a.preventDefault()
          
          localStorage.clear();
          navigate("/")
    }
  
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Welcome {company} </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/pshome/psbuyercrop">Crop Buying</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Traders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Commodity Exchanges</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Commodity Exchanges
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <ul className='navbar-nav mx-3'>
    <li className="nav-item">
          <Link className="nav-link" onClick={handlelogout} to="/">Logout</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
<Outlet></Outlet>
   
   </>
  )
}
