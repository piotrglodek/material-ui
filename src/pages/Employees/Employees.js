import { useState } from 'react';
// components
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import useTable from '../../components/useTable';
// MUI
import {
  makeStyles,
  Paper,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
// services
import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees = () => {
  const classes = useStyles();

  const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Email Adress' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department' },
  ];
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const { TblContainer, TblHead } = useTable(records, headCells);
  return (
    <>
      <PageHeader
        title='New  employee'
        subTitle='Form design with validation'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TblContainer>
          <TblHead />
          <TableBody>
            {records.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </Paper>
    </>
  );
};

export default Employees;
