export interface IColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
}

export const columns: readonly IColumn[] = [
  { id: 'companySigDate', label: 'companySigDate', minWidth: 100 },
  { id: 'companySignatureName', label: 'сompanySignatureName', minWidth: 100 },
  {
    id: 'documentName',
    label: 'documentName',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'documentStatus',
    label: 'documentStatus',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'documentType',
    label: 'documentType',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'employeeNumber',
    label: 'employeeNumber',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'employeeSigDate',
    label: 'employeeSigDate',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'employeeSignatureName',
    label: 'employeeSignatureName',
    minWidth: 100,
    align: 'right',
  },
];
