// MUI
import {
  AppBar,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Badge,
  makeStyles,
} from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFFFFF',
    transform: 'translateZ(0)',
  },
  searchInput: {
    opacity: '0.6',
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#F2F2F2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item>
            <InputBase
              placeholder='Search'
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize='small' />}
            />
          </Grid>
          <Grid item sm />
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color='primary'>
                <ChatBubbleOutlineIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
