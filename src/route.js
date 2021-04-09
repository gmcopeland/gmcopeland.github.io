import React from 'react';
import {Switch, Route} from 'react-router-dom';

import App from './App';
import Project from './pages/Projects'

const Main = () => {
    return (
        <Switch> 
            <Route exact path='/portfolio' component={App}></Route>
            <Route exact path='/projects' component={Project}></Route>

        </Switch>
    );

}
export default Main;