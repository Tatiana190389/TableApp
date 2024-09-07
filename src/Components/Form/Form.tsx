import { Dialog, Box, DialogContent, DialogActions, Button, Typography, TextField } from '@mui/material';
import { nameButton, Record, setNewRecord } from '../Slices/FormSlice';
import { useAppDispatch, useAppSelector, RootState } from '../Store/store';
import { useState } from 'react';
import { fetchAddNewRecord, fetchUpdateRecord } from '../Thunk/Thunk';
import { selectRow, setSelectRecord, clearSelectedRow } from '../Slices/TableSlice';
import { IForm } from './interface';

export default function Form({ open, onClose }: IForm) {
  const [nameError, setNameError] = useState(false);
  const dispatch = useAppDispatch();
  const buttonName = useAppSelector(nameButton);
  const rowSelect = useAppSelector(selectRow);
  const record = useAppSelector(Record);

  const {
    companySigDate,
    companySignatureName,
    documentName,
    documentStatus,
    documentType,
    employeeNumber,
    employeeSigDate,
    employeeSignatureName,
  } = useAppSelector((state: RootState) => state.form.record);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.id;
    const value = e.target.value;
    rowSelect
      ? dispatch(
          setSelectRecord({
            field: name,
            value: value,
          })
        )
      : dispatch(
          setNewRecord({
            field: name,
            value: value,
          })
        );
  };

  const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (
      companySigDate === '' ||
      companySignatureName === '' ||
      documentName === '' ||
      documentStatus === '' ||
      documentType === '' ||
      employeeNumber === '' ||
      employeeSigDate === '' ||
      employeeSignatureName === ''
    ) {
      setNameError(true);
    }
    rowSelect ? dispatch(fetchUpdateRecord({ data: rowSelect })) : dispatch(fetchAddNewRecord({ data: record }));
    onClose();
    dispatch(clearSelectedRow());
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Typography sx={{ textAlign: 'center', mt: 5 }}>Create new record</Typography>
      <Box component="form" onSubmit={onSubmit} noValidate>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            id="companySigDate"
            type="date"
            value={buttonName === 'create' ? null : rowSelect?.companySigDate}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести CompanySigDate' : ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="companySignatureName"
            label="companySignatureName"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.companySignatureName}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести setDocumentName' : ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="documentName"
            label="documentName"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.documentName}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести сompanySignatureName' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="documentStatus"
            label="documentStatus"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.documentStatus}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести documentStatus' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="documentType"
            label="documentType"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.documentType}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести documentType' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="employeeNumber"
            label="employeeNumber"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.employeeNumber}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести EmployeeNumber' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="employeeSigDate"
            type="date"
            value={buttonName === 'create' ? null : rowSelect?.employeeSigDate}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести employeeSigDate' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="employeeSignatureName"
            label="employeeSignatureName"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.employeeSignatureName}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести employeeSignatureName' : ''}
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

/*<TextField
            required
            autoFocus
            margin="dense"
            id="companySigDate"
            type="date"
            value={buttonName === 'create' ? null : rowSelect?.companySigDate}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести CompanySigDate' : ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="companySignatureName"
            label="companySignatureName"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.companySignatureName}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести setDocumentName' : ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            id="documentName"
            label="documentName"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.documentName}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести сompanySignatureName' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="documentStatus"
            label="documentStatus"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.documentStatus}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести documentStatus' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="documentType"
            label="documentType"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.documentType}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести documentType' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="employeeNumber"
            label="employeeNumber"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.employeeNumber}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести EmployeeNumber' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="employeeSigDate"
            type="date"
            value={buttonName === 'create' ? null : rowSelect?.employeeSigDate}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести employeeSigDate' : ''}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="employeeSignatureName"
            label="employeeSignatureName"
            type="text"
            value={buttonName === 'create' ? null : rowSelect?.employeeSignatureName}
            onChange={handleChange}
            fullWidth
            error={nameError}
            helperText={nameError ? 'Необходимо ввести employeeSignatureName' : ''}
          />*/
