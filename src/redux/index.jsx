import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducer/Reducer";

export const store =createStore(counterReducer)