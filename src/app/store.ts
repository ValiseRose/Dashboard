import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";

import LayoutReducer from "../slices/layouts/reducer";
// Authentication
import ForgetPasswordReducer from "../slices/auth/forgetpwd/reducer";
import ProfileReducer from "../slices/auth/profile/reducer";
import DashboardReducer from "../slices/dashboard/reducer";
import authSlice from "features/account/authSlice";
import { accountSlice } from "features/account/accountSlice";
import { categorySlice } from "features/category/categorySlice";
import { subcategorySlice } from "features/subcategory/subcategorySlice";
import { subsubcategorySlice } from "features/subsubcategory/subsubcategorySlice";


export const store = configureStore({
  reducer: {
    [accountSlice.reducerPath]: accountSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [subcategorySlice.reducerPath]: subcategorySlice.reducer,
    [subsubcategorySlice.reducerPath]: subsubcategorySlice.reducer,
   
    auth: authSlice,
    Layout: LayoutReducer,
    ForgetPassword: ForgetPasswordReducer,
    Profile: ProfileReducer,
    Dashboard: DashboardReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      accountSlice.middleware,
      categorySlice.middleware,
      subcategorySlice.middleware,
      subsubcategorySlice.middleware
     
    ]);
  },
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
