import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Master from './Master';
import CreateItem from './CreateItem';
import DisplayItems from './DisplayItems';

export default() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Master} />
            <Route path="/add-item" component={CreateItem} />
            <Route path="/list-items" component={DisplayItems} />
        </Switch>
    </BrowserRouter>
);
