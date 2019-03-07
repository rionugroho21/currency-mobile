import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/themify-icons/css/themify-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import App from './App';

const initialState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));