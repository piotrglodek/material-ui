import { Card, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  padeHeader: {
    padding: theme.spacing(1),
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: 'flex',
    padding: theme.spacing(2),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    },
  },
}));

const PageHeader = props => {
  const { title, subTitle, icon } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.padeHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='subtitle2'>{subTitle}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
