import { configureStore } from '@reduxjs/toolkit';
import userAuthorizationReducer from '../Slices/userAuthorizationSlice';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import tableDataReducer from '../Slices/TableSlice';
import formReducer from '../Slices/FormSlice';

const reducer = {
  userAuthorization: userAuthorizationReducer,
  tableData: tableDataReducer,
  form: formReducer,
};
const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
