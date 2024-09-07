import { createSlice } from '@reduxjs/toolkit';
import { fetchAddNewRecord, fetchDeleteRecord, fetchGetTableData, fetchUpdateRecord } from '../Thunk/Thunk';
import { RootState } from '../Store/store';

export interface ITableData {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
  id?: string;
}

export interface IInitialState {
  tableArr: ITableData[];
  isLoading: boolean;
  isError: boolean;
  selectRow?: any;
}
const initialState: IInitialState = { tableArr: [], isLoading: false, isError: false };

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState,
  reducers: {
    selectedRow: (state, action) => {
      state.selectRow = action.payload;
    },
    clearSelectedRow: (state) => {
      state.selectRow = initialState.selectRow;
    },

    setSelectRecord: (state, action) => {
      state.selectRow[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetTableData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetTableData.fulfilled, (state, action) => {
      state.tableArr = action.payload;
    });
    builder.addCase(fetchGetTableData.rejected, (state, action) => {
      state.isError = true;
      console.error('Error', action.error);
    });

    builder.addCase(fetchAddNewRecord.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAddNewRecord.fulfilled, (state, action) => {
      state.tableArr.push(action.payload);
    });
    builder.addCase(fetchAddNewRecord.rejected, (state, action) => {
      state.isError = true;
      console.error('Error', action.error);
    });

    builder.addCase(fetchUpdateRecord.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUpdateRecord.fulfilled, (state, action) => {
      state.tableArr.splice(
        state.tableArr.findIndex((el) => el.id === action.payload.id),
        1,
        action.payload
      );
    });
    builder.addCase(fetchUpdateRecord.rejected, (state, action) => {
      state.isError = true;
      console.error('Error', action.error);
    });

    builder.addCase(fetchDeleteRecord.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDeleteRecord.fulfilled, (state, action) => {
      state.tableArr.splice(
        state.tableArr.findIndex((el) => el.id === action.payload.id),
        1
      );
    });
    builder.addCase(fetchDeleteRecord.rejected, (state, action) => {
      state.isError = true;
      console.error('Error', action.error);
    });
  },
});

const TableArr = (state: RootState) => state.tableData.tableArr;
const selectRow = (state: RootState) => state.tableData.selectRow;
const IsLoading = (state: RootState) => state.tableData.isLoading;

export { TableArr, selectRow, IsLoading };
export const { selectedRow, setSelectRecord, clearSelectedRow } = tableDataSlice.actions;

export default tableDataSlice.reducer;
