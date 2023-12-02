import { createStore } from "redux";
import { counterReducer } from "./reducer/counterReducer.js";


export const store = createStore(counterReducer);