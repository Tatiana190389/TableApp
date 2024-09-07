import axios from 'axios';
import { IRecord } from '../Slices/FormSlice';

export interface IAddNewRecord {
  data: IRecord;
}

export default async function addNewRecord({ data }: IAddNewRecord) {
  const userToken = localStorage.getItem('token');
  return axios
    .post(`${process.env.REACT_APP_ADD_RECORD_URL}`, data, {
      headers: { 'x-auth': userToken },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.error(error));
}
