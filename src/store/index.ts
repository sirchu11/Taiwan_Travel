import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import menuReducer from "./slice/menu";


const reducers = combineReducers({
    menu: menuReducer,
});


export default configureStore({
  reducer: reducers,
});
