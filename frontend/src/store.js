import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';


const initialState = {}
const reducer = combineReducers({
    productList: productListReducer
   
});
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore
(reducer,
initialState,
composeEnhancer(applyMiddleware(thunk)));

export default store;
