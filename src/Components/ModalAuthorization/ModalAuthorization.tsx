import { Dialog, Box, DialogContent, DialogActions, Button, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../Store/store';
import { fetchGetUserToken } from '../Thunk/Thunk';
import { setUserName, setUserPassword, UserName, UserPassword, loggedUser } from '../Slices/userAuthorizationSlice';

export default function ModalAuthorization() {
  const [openModal, setOpenModal] = useState(true);
  const [nameError, setNameError] = useState(false);
  const dispatch = useAppDispatch();
  const username = useAppSelector(UserName);
  const password = useAppSelector(UserPassword);

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserPassword(e.target.value));
  };

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (password === '') {
      setNameError(true);
    }
    if (username === '') {
      setNameError(true);
    }
    dispatch(fetchGetUserToken({ username, password }));
    dispatch(loggedUser(true));
    setOpenModal(false);
  };

  return (
    <Dialog open={openModal} onClose={onSubmit}>
      <Typography sx={{ textAlign: 'center', mt: 5 }}>Для работы в приложени, необходимо авторизоваться</Typography>
      <Box component="form" onSubmit={onSubmit} noValidate>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="username"
            label="UserName"
            type="text"
            value={username}
            onChange={handleChangeUserName}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести логин' : ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="password"
            label="password"
            value={password}
            onChange={handleChangePassword}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести пароль' : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
