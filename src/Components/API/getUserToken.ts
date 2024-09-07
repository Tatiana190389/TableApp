import axios from 'axios';

export interface IGetUserToken {
  username: string;
  password: string;
}
export default async function getUserToken({ username, password }: IGetUserToken) {
  return axios
    .post(`${process.env.REACT_APP_GET_USER_TOKEN_URL}`, {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem('token', response.data.data.token);
    })
    .catch((error) => console.error(error));
}
