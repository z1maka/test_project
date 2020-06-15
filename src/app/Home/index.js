import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../Loading';

const LoadableComponent = Loadable({
    loader: () => import(/*webpackChunkName: "home" */ './Component'),
    loading: Loading,
    delay: 1000,
});

export const Home = () => <LoadableComponent />;
