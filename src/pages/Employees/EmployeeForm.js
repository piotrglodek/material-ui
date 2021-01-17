// MUI
import {
  Grid,
  TextField,
  makeStyles,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// hooks
import useForm from '../../hooks/useForm';
// services
import { departmentCollection } from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const [values, setValues, handleInputChange] = useForm(initialFValues);

  const convertToDefEventPara = (name, value) => ({
    target: { name, value },
  });

  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete='off'>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            onChange={handleInputChange}
            value={values.fullName}
            name='fullName'
            variant='outlined'
            label='Full Name'
          />
          <TextField
            onChange={handleInputChange}
            value={values.email}
            name='email'
            variant='outlined'
            label='Email'
            type='email'
          />
          <TextField
            onChange={handleInputChange}
            value={values.mobile}
            name='mobile'
            variant='outlined'
            label='Phone number'
            type='tel'
          />
          <TextField
            onChange={handleInputChange}
            value={values.city}
            name='city'
            variant='outlined'
            label='City'
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              row={true}
              aria-label='gender'
              name='gender'
              value={values.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value='male'
                control={<Radio color='primary' />}
                label='Male'
              />
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
            </RadioGroup>
          </FormControl>
          <FormControl variant='outlined'>
            <InputLabel id='employee-department'>Department</InputLabel>
            <Select
              value={values.departmentId}
              onChange={handleInputChange}
              label='Department'
              name='departmentId'
              labelId='employee-department'
              id='eployee-select'
            >
              {departmentCollection.map(({ id, title }) => (
                <MenuItem key={id} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.isPermanent}
                onChange={e =>
                  handleInputChange(
                    convertToDefEventPara('isPermanent', e.target.checked)
                  )
                }
                name='isPermanent'
                color='primary'
              />
            }
            label='Is permanent'
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              name='hireDate'
              value={values.hireDate}
              onChange={date =>
                handleInputChange(convertToDefEventPara('hireDate', date))
              }
              disableToolbar
              variant='inline'
              inputVariant='outlined'
              minDate={new Date()}
              format='MM/dd/yyyy'
              label='Hire date'
            />
          </MuiPickersUtilsProvider>
          <Button
            variant='contained'
            size='large'
            color='primary'
            type='submit'
          >
            Add employee
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
