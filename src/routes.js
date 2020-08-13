import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Filme from './components/Filme'

const Routes = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/> 
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;