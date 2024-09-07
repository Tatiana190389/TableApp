import axios from 'axios';

export interface IDeleteRecord {
  id: string;
}

export default async function deleteRecord({ id }: IDeleteRecord) {
  const userToken = localStorage.getItem('token');
  return axios
    .delete(`${process.env.REACT_APP_DELETE_RECORD_URL}${id}`, {
      headers: { 'x-auth': userToken },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
}
