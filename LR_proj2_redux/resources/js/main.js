import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu/Menu';
import routes from './routes';

class Main extends Component {
    render() {
        return (
            <Route >
                <div className="Main">
                    <Menu />
                    {this.showComponentMenu(routes)}
                </div>
            </Route>
        );
    }

    showComponentMenu = (routes) => {
        var  result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key = {index}
                        path = {route.path}
                        exact = {route.exact}
                        component = {route.component}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default Main;
