import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';
import { Another } from '../pages/AnotherPage';
import { Home } from '../pages/HomePage';

// с помощью комментария можно переиминовать имя чанка. webpackChunkName
const App = () => {
    console.log('__ENV__', __ENV__);
    console.log('__PROD__', __PROD__);
    console.log('__DEV__', __DEV__);
    console.log('__STAGE__', __STAGE__);

    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/another'} component={Another} />
        </Switch>
    );
};

export default hot(App);
