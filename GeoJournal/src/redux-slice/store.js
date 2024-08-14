import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
    cartcount:cartSlice
    },
    });
    export default store;