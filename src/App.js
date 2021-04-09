import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './route';

import {Switch, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Garrett Copelands Git Portfolio </h1>
      </header>
      <body>
        <h1> Welcome to my Portfolio</h1>
        <h2> Thank you for visiting .</h2>
      </body>
      <main>
        <Main />
      </main>
        <p> I am a graduating Computer Science Student with a focus on Cyber Security!
          This portfolio will contain both individual and academic projects I have worked on
          the last couple years. Some may be complete, some may be starters that I haven't had the time
          to finish. Regardless, please enjoy your stay and check back often!
        </p>
        <div class = "menu">
          <ul>
            <li><Link to="/projects">Check out my projects!</Link></li>
            <li><a href="">Register as a visitor!</a></li>
            <li><a href=""> View more about me!</a></li>
          </ul>
        </div>

    </div>
    

  );
}


export default App;
