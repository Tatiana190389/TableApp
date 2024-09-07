import axios from 'axios';
import { ITableData } from '../Slices/TableSlice';

export interface IUpdateRecord {
  data: ITableData;
}
export default async function updateRecord({ data }: IUpdateRecord) {
  const userToken = localStorage.getItem('token');
  return axios
    .post(`${process.env.REACT_APP_UPDATE_RECORD_URL}${data.id}`, data, {
      headers: { 'x-auth': userToken },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.error(error));
}
