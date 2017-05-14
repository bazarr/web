import App from './front_page/components/main.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import FrontPageReducers from './front_page/reducers';

let store = createStore(FrontPageReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);
