import React, {useState, useEffect} from 'react';
import NavBar from "./components/NavBar";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";


const routing = {

}


const App: React.FC = () => {

    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route component={TodosPage} path="/" exact/>
            <Route component={AboutPage} path="/about"/>
        </Switch>
      </BrowserRouter>
    )
}

export default App;
