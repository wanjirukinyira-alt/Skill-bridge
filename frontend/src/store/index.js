import { configureStore } from "@reduxjs/toolkit";
import prodReducer from "./productionRoute.js";

const store = configureStore({
    reducer: {
        prod: prodReducer,
        auth:authReducer,
    }
});


export default store;