import { createSlice } from '@reduxjs/toolkit';
import { fetchGetUserToken } from '../Thunk/Thunk';
import { RootState } from '../Store/store';

export interface IUser {
  userName?: string;
  password: string;
}

export interface IInitialState {
  user: IUser;
  userToken: string;
  isLoginUser: boolean;
  isLoading: boolean;
  isError: boolean;
}
const initialState: IInitialState = {
  user: { userName: '', password: '' },
  userToken: '',
  isLoginUser: false,
  isLoading: false,
  isError: false,
};

export const userAuthorizationSlice = createSlice({
  name: 'userAuthorization',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    setUserPassword: (state, action) => {
      state.user.password = action.payload;
    },
    loggedUser: (state, action) => {
      state.isLoginUser = action.payload;
    },

    isUserLogged: (state, action) => {
      const userToken = localStorage.getItem('token');
      if (userToken) {
        state.userToken = userToken;
        state.isLoginUser = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetUserToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetUserToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userToken = action.payload;
    });
    builder.addCase(fetchGetUserToken.rejected, (state, action) => {
      state.isError = true;
      console.error('Error', action.error);
    });
  },
});

const UserName = (state: RootState) => state.userAuthorization.user.userName;
const UserPassword = (state: RootState) => state.userAuthorization.user.password;
const IsLoginUser = (state: RootState) => state.userAuthorization.isLoginUser;
const Token = (state: RootState) => state.userAuthorization.userToken;
const loadingUser = (state: RootState) => state.userAuthorization.isLoading;

export { UserName, UserPassword, IsLoginUser, Token, loadingUser };
export const { setUserName, setUserPassword, loggedUser, isUserLogged } = userAuthorizationSlice.actions;

export default userAuthorizationSlice.reducer;
