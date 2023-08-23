import {applyMiddleware, combineReducers, createStore} from "redux";
import {searchReducer} from "./reducers/searchReducer";
import {productsReducer} from "./reducers/productsReducer";
import thunk from "redux-thunk";
import {clientsReducer} from "./reducers/clientsReducer";
import {subcategoriesReducer} from "./reducers/subcategoryReducer";
import {categoriesReducer} from "./reducers/categoryReducer";

const rootReducer=combineReducers({
    search:searchReducer,
    product:productsReducer,
    clients:clientsReducer,
    subcategory:subcategoriesReducer,
    category:categoriesReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

