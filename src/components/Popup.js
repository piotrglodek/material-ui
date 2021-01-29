// MUI
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// components
import Controls from './controls/Controls';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(3),
  },
  dialogTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      maxWidth='md'
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle disableTypography className={classes.dialogTitleContainer}>
        <Typography variant='h6'>{title}</Typography>
        <Controls.ActionButton
          color='secondary'
          onClick={() => setOpenPopup(false)}
        >
          <CloseIcon />
        </Controls.ActionButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
