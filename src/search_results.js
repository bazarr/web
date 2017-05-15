import App from './search_results/components/main.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import FrontPageReducers from './search_results/reducers';

let store = createStore(FrontPageReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);
