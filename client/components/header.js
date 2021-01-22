import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";

const Header = () => (
<div className="container">
  <header className="blog-header py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="text-muted" href="#">Main site</a>
      </div>
      <div className="col-4 text-center">
        <a className="blog-header-logo text-dark" href="{% url 'index' %}">
        <Link to="/">
        <h1 className="img-fluid">Logo</h1>
        </Link>
        </a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="btn btn-sm btn-outline-info mr-1" href='#'>Ru</a>
        <a className="btn btn-sm btn-outline-info" href='#'>Logout</a>
        <a className="btn btn-sm btn-outline-info" href='#'>Teacher?</a>
      </div>
    </div>
  </header>
  <Nav />
</div> 
);

export default Header;
