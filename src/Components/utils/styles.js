const drawerWidth = 240
const buttonWidth = '100%'
const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: '20px',
  },
  content: {
    textAlign: 'justify',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  textField: {
    width: '400px',
  },

  bootstrapInput: {
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
  },
  form:
  {
    position: 'relative',
    resize: 'vertical',
    overflow: 'auto',
    width: '400px',
    margin: 'auto',
    height: '100vh',
  },
  user: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  paper: {
    backgroundColor: '#e0e0e08f'},
  submitForm: {
    flexGrow: 1,
    width: buttonWidth,
    margin: 'auto',
    textTransform: 'capitalize'
  },
  login: {
    resize: 'vertical',
    overflow: 'auto',
    top: '50%',
    position: 'absolute',
    transform: 'translateY(-50%)'
  },

})

export default styles