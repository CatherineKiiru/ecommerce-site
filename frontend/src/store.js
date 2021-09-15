import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import data from './data';

const initialState = {}
const reducer = (state, action) =>{
    return {products: data.products };
};
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore
(reducer,
initialState,
composeEnhancer(applyMiddleware(thunk)));

export default store;
