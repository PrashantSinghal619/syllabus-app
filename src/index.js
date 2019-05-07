import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SyllabusApp from './components/SyllabusApp';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

render (
	<Provider store={store}>
		<SyllabusApp />
	</Provider>,
	document.getElementById("root")
)