
import '../App.css';
import React from 'react';

function Projects(){
    return(
      <div classname = "App">
        <header classname = "sub-header">
          <h1>Personal Projects</h1>
        </header>
        <body>
          <h1> Welcome to the window into my lab</h1>
          <h2> These projects are either class projects I enjoyed or personal projects</h2>
          <ul>
            <li><a href="https://github.com/gmcopeland/Experiments/blob/master/ENCDEC.exe"> Ascii Shift </a>
            <p> This project was me toying around with ASCII shifting to create a digital kind of Enigma Machines.</p></li>
            <li><a href="https://github.com/gmcopeland/PubSub">Publish Subscribe</a><p> This program demonstrates the Publish/Subscribe model in C++</p></li>
          </ul>
          
        </body>
      
      
      </div>
  
    );
  }

  export default Projects;