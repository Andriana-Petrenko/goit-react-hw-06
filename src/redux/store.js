import { createStore } from "redux";
import {combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import {contactboxReducer} from './contactbox/contactboxReducer.js'
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer =combineReducers ( {
  contactbox:contactboxReducer,
});
 

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer,enhancer);
