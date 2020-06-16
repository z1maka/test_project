import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './init/store';

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);

// TODO: hot reloading for react
// react-hot-loader : babel плагин
// react-hot-loader : исходный код
