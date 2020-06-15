import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Another } from './AnotherPage';
import { Home } from './Home';

// с помощью комментария можно переиминовать имя чанка. webpackChunkName
const Index = () => {
    console.log('__ENV__', __ENV__);
    console.log('__PROD__', __PROD__);
    console.log('__DEV__', __DEV__);
    console.log('__STAGE__', __STAGE__);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/another'} component={Another} />
            </Switch>
        </BrowserRouter>
    );
};

export default hot(Index);
