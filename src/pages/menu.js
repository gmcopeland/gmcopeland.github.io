import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return(
<div class="menu">
          <ul>
            <li><Link to="/projects">Check out my projects!</Link></li>
            <li><Link to="/contact"> My Contact Info!</Link></li>
            <li><Link to="/"> Home Page</Link></li>
          </ul>
        
        </div>

    );
}

export default Menu;