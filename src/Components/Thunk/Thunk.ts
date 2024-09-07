import { createAsyncThunk } from '@reduxjs/toolkit';
import getUserToken, { IGetUserToken } from '../API/getUserToken';
import getTableData from '../API/getTableData';
import addNewRecord, { IAddNewRecord } from '../API/addRecord';
import updateRecord, { IUpdateRecord } from '../API/updateRecord';
import deleteRecord, { IDeleteRecord } from '../API/deleteRecord';

export const fetchGetUserToken = createAsyncThunk(
  'userAuthorization/fetchGetUserToken',
  async ({ username, password }: IGetUserToken) => {
    const result = await getUserToken({ username, password });
    return result;
  }
);

export const fetchGetTableData = createAsyncThunk('tableData/fetchGetTableData', async () => {
  const result = await getTableData();
  return result;
});

export const fetchAddNewRecord = createAsyncThunk('tableData/fetchAddNewRecord', async ({ data }: IAddNewRecord) => {
  const result = await addNewRecord({ data });
  return result;
});

export const fetchUpdateRecord = createAsyncThunk('tableData/fetchUpdateRecord', async ({ data }: IUpdateRecord) => {
  const result = await updateRecord({ data });
  return result;
});

export const fetchDeleteRecord = createAsyncThunk('tableData/fetchDeleteRecord', async ({ id }: IDeleteRecord) => {
  const result = await deleteRecord({ id });
  return result;
});
