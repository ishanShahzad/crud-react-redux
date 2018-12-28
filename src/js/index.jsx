import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux'
import App from './components/App';
import reduxThunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'

import rootReducer from './reducers';
import * as actions from './actions';

const store = createStore(rootReducer,applyMiddleware(reduxThunk,logger))

store.dispatch(actions.getData())

ReactDom.render( <Provider store={store}><Router><App /></Router></Provider>,document.querySelector('#app'))