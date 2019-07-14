import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/reducers";

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;