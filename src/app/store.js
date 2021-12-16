import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import todoReducer from "./reducer";

const middleware = [];
middleware.push(logger)

const store = createStore(todoReducer, applyMiddleware(...middleware));

export default store;