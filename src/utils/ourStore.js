import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

const ourStore = configureStore({
    reducer : {
        cart : cartReducer,
    }
})

export default ourStore;