import { combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage"
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/CartSlice";
import userReducer from "./user/user"


const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);