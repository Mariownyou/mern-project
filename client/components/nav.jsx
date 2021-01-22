import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
<nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler w-100" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav w-100 justify-content-between">
      <li class="nav-item">
        <a class="nav-link" href='#'>Main</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='#'>News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='#'>For Students</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='#'>For Parents</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='#'>Ask Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href='#'>Any Wishes?</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Advanced Options
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href='#'>Profile</a>
          <a class="dropdown-item" href='#'>New Post</a>
          <a class="dropdown-item" href='#'>New Category</a>
          <a class="dropdown-item" href='#'>Change Password</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
);

export default Nav;
