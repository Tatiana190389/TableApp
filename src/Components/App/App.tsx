import './App.css';
import ModalAuthorization from '../ModalAuthorization/ModalAuthorization';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { IsLoginUser, isUserLogged, loadingUser } from '../Slices/userAuthorizationSlice';
import { useEffect } from 'react';
import TableData from '../Table/Table';
import CircularProgressBar from '../CircularProgress/CircularProgress';

function App() {
  const isUserLogin = useAppSelector(IsLoginUser);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loadingUser);

  useEffect(() => {
    dispatch(isUserLogged(true));
  }, [dispatch]);

  if (isLoading) {
    return <CircularProgressBar />;
  }

  return <div className="App">{!isUserLogin ? <ModalAuthorization /> : <TableData />}</div>;
}

export default App;
