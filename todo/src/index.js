import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import './index.css';
import App from './App.jsx';
import { Reducer } from './reducers/index';
import * as serviceWorker from './serviceWorker';


const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
);

