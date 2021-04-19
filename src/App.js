
import './App.css';
import React from 'react';


import { Link, Route, Switch } from 'react-router-dom';

import Project from './pages/Projects'
import Contact from './pages/Contact'
import Header from './pages/header'
import Menu from './pages/menu'
import About from './pages/About'
const Main = () => {
    return (
        <Switch> 
            <Route exact path='/portfolio' component={App}></Route>
            <Route exact path='/projects' component={Project}></Route>
            <Route exact path ='/contact' component={Contact}></Route>
        </Switch>
    );

}

function App() {

    return(
    
      <div className="App">

        <header className="App-header">
          <Header/>
        </header>
        <body>
         
        
        <main>
          <Main />
        </main>
        <About />
        <Menu/>
      </body>

      </div>



    );
  }



export default App;
