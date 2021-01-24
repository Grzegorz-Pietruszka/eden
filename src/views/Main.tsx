import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Example from "../components/Example";

const Main = () => {
    return (
        <Switch>
            <Route path="/xD" component={Example}  />
        </Switch>
    );
};

export default Main;
