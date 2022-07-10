import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div style ={{marginBottom:'4rem'}}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img src="monkey-logo.png" alt="Monkey Logo" style={{width:'40px'}} className="rounded-pill"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmain" aria-controls="navmain" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmain">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link" aria-current="page" to="/"><b><i>Home</i></b></Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about"><b><i>About</i></b></Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false"><b><i>Category</i></b></a>
                        <ul className="dropdown-menu">
                          <li><Link className="dropdown-item" to="/">General</Link></li>
                          <li><Link className="dropdown-item" to="/category/business">Business</Link></li>
                          <li><Link className="dropdown-item" to="/category/sports">Sports</Link></li>
                          <li><Link className="dropdown-item" to="/category/entertainment">Entertainment</Link></li>
                        </ul>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-warning" type="submit">Search</button>
                  </form>
                </div>
            </div>
        </nav>
      </div>
  )
}

