import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer, orderReducer } from "./reducers/cartRuducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;

export const server = "https://engineer-burder-wala-server.onrender.com/api/v1";
