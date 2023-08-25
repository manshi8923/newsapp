
import React from 'react';
import {Link} from "react-router-dom";
export const Navbar=(props)=> {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">NewsApp</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/business">business</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="entertainment/">entertainment</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/general">general</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/health">health</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/science">science</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="sports/">sports</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/technology">technology</Link>
      </li>
    </ul>
    
  </div>
</nav>
      </div>
    )
}

export default Navbar