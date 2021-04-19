import '../App.css';
import React from 'react';

function Contact(){
    return(
      <div classname = "App">
        <header classname = "sub-header">
          <h1>Contact Information</h1>
        </header>
        <body>
          <h2> Need to contact me? Check below for the various ways</h2>
          
          <ul>
            <li><a href="mailto: gmcopeland95@gmail.com"> EMAIL ME </a></li>
            <li><a href="mailto: 9703680917@txt.att.net"> TEXT ME</a></li>
            <li><a href="https://github.com/gmcopeland?tab=repositories">GITHUB</a></li>
          </ul>
          
        </body>
      
      
      </div>
  
    );
  }

  export default Contact;