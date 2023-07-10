import { combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage"
import productReducer from "./products/productsSlice";
import cartReducer from "./cart/CartSlice";

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);