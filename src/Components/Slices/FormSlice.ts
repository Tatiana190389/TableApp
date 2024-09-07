import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Store/store';

export interface IRecord {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

export interface IInitialState {
  record: IRecord;
  isLoading: boolean;
  isError: boolean;
  nameButton: string;
}

export const initialState: IInitialState = {
  record: {
    companySigDate: '',
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: '',
    employeeSignatureName: '',
  },
  nameButton: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setNameButton: (state, action) => {
      state.nameButton = action.payload;
    },
    setNewRecord: (state, action) => {
      state.record[action.payload.field] = action.payload.value;
    },
  },
});

const selectCompanySigDate = (state: RootState) => state.form.record.companySigDate;
const nameButton = (state: RootState) => state.form.nameButton;
const CompanySignatureName = (state: RootState) => state.form.record.companySignatureName;
const DocumentName = (state: RootState) => state.form.record.documentName;
const DocumentStatus = (state: RootState) => state.form.record.documentStatus;
const DocumentType = (state: RootState) => state.form.record.documentType;
const EmployeeNumber = (state: RootState) => state.form.record.employeeNumber;
const EmployeeSigDate = (state: RootState) => state.form.record.employeeSigDate;
const EmployeeSignatureName = (state: RootState) => state.form.record.employeeSignatureName;
const Record = (state: RootState) => state.form.record;

export {
  selectCompanySigDate,
  nameButton,
  CompanySignatureName,
  DocumentName,
  DocumentStatus,
  DocumentType,
  EmployeeNumber,
  EmployeeSigDate,
  EmployeeSignatureName,
  Record,
};
export const { setNewRecord, setNameButton } = formSlice.actions;
export default formSlice.reducer;
