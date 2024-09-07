import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';
import { columns } from '../constants/columnsName';
import { useAppSelector, useAppDispatch } from '../Store/store';
import { Token } from '../Slices/userAuthorizationSlice';
import { useState, useEffect } from 'react';
import { fetchDeleteRecord, fetchGetTableData } from '../Thunk/Thunk';
import { ITableData, TableArr, selectedRow, selectRow, clearSelectedRow } from '../Slices/TableSlice';
import { modifyDate } from '../constants/modifyDate';
import Form from '../Form/Form';
import { setNameButton } from '../Slices/FormSlice';

export default function TableData() {
  const userToken = useAppSelector(Token);
  const dispatch = useAppDispatch();
  const tableArrRows = useAppSelector(TableArr);
  const [openModal, setOpenModal] = useState(false);
  const rowSelect = useAppSelector(selectRow);

  useEffect(() => {
    dispatch(fetchGetTableData());
  }, [dispatch, userToken]);

  const handleRowClick = (event: React.ChangeEvent<HTMLElement>, row: ITableData) => {
    event.stopPropagation();
    dispatch(selectedRow(row));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const nameButton = e.currentTarget.id;
    dispatch(setNameButton(nameButton));
    switch (nameButton) {
      case 'delete':
        rowSelect ? dispatch(fetchDeleteRecord({ id: rowSelect.id })) : alert('Please Choose Record ');
        dispatch(clearSelectedRow());
        break;
      case 'create':
        rowSelect ? dispatch(clearSelectedRow()) && setOpenModal(true) : setOpenModal(true);
        break;
      case 'update':
        !rowSelect ? alert('Please Choose Record ') : setOpenModal(true);
        break;
    }
  };

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden', maxHeight: 440 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableArrRows?.map((row: ITableData) => (
                <TableRow key={row.id} onClick={(e) => handleRowClick(e, row)} selected={rowSelect?.id === row.id}>
                  <TableCell>{modifyDate(row.companySigDate)}</TableCell>
                  <TableCell>{row.companySignatureName}</TableCell>
                  <TableCell>{row.documentName}</TableCell>
                  <TableCell>{row.documentStatus}</TableCell>
                  <TableCell>{row.documentType}</TableCell>
                  <TableCell>{row.employeeNumber}</TableCell>
                  <TableCell>{modifyDate(row.employeeSigDate)}</TableCell>
                  <TableCell>{row.employeeSignatureName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper>
        <Box sx={{ marginTop: 5 }}>
          <Button onClick={handleClick} sx={{ marginRight: 2 }} id="create">
            Create new
          </Button>
          <Button onClick={handleClick} sx={{ marginRight: 2 }} id="update">
            Update
          </Button>
          <Button onClick={handleClick} id="delete">
            Delete
          </Button>
        </Box>
      </Paper>
      {openModal && <Form open={openModal} onClose={() => setOpenModal(false)} />}
    </>
  );
}
