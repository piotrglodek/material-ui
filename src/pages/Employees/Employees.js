import { useState } from 'react';
// components
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';
import Controls from '../../components/controls/Controls';
import Popup from '../../components/Popup';
// MUI
import {
  makeStyles,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from '@material-ui/core';
import {
  Search as SearchIcon,
  EditOutlined as EditOutlinedIcon,
  Close as CloseIcon,
  Add as AddIcon,
  PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,
} from '@material-ui/icons';
// services
import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
  newBtn: {
    position: 'absolute',
    right: '10px',
  },
}));

const Employees = () => {
  const classes = useStyles();

  const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Adress' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department', disableSorting: true },
  ];
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: items => {
      return items;
    },
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const handleSearch = ({ target: { value } }) => {
    setFilterFn({
      fn: items => {
        if (value === '') {
          return items;
        } else {
          // return items.filter(x =>
          //   x.fullName.toLowerCase().includes(value.toLowerCase())
          // );
          return items.filter(
            x =>
              x.fullName.toLowerCase().includes(value.toLowerCase()) ||
              x.mobile.toLowerCase().includes(value.toLowerCase()) ||
              x.email.toLowerCase().includes(value.toLowerCase())
          );
        }
      },
    });
  };
  return (
    <>
      <PageHeader
        title='New  employee'
        subTitle='Form design with validation'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input
            onChange={handleSearch}
            label='Search employees'
            className={`${classes.searchInput}`}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Controls.Button
            text='Add New'
            variant='outlined'
            startIcon={<AddIcon />}
            className={classes.newBtn}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
};

export default Employees;
