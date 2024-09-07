import axios from 'axios';

export interface IGetTableData {
  token: string;
}

export default async function getTableData() {
  const userToken = localStorage.getItem('token');
  return axios
    .get('https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get', {
      headers: { 'x-auth': userToken },
    })
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.error(error));
}
