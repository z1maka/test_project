// import('style-loader!css-loader!./styles/main.scss')  === inline downloading
import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App />, document.getElementById('app'));

// TODO: hot reloading for react
// react-hot-loader : babel плагин
// react-hot-loader : исходный код
// hot(module)(component)
