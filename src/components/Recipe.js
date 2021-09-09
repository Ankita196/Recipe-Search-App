import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Paper from '@material-ui/core/Paper';

import CloseIcon from '@material-ui/icons/Close';



const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});
const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  roots :{
flexGrow: 1,
  },
 paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:300,
    height:500,
    backgroundImage:"linear-gradient(#fce4ec,white,#fce4ec)"
  },
  media: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));


const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const Recipe = ({ title, calories, image, ingredients}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Grid container className={classes.roots} spacing={2}>
    <Grid item xs={12} >
        <Paper className={classes.paper}>
        <Typography style={{ marginLeft: 30 ,height:70,fontWeight:"bold",color:"#880e4f"}}>{title}</Typography>
        <Typography style={{ marginLeft: 30 ,height:30,fontWeight:"bold",color:"#880e4f"}}>Calories :{calories}</Typography>
        <img
          src={image}
          style={{ height: '50%', width: '75%', display: 'block' }}
          className={classes.media}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CardContent>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ width: 250 }}
                color="primary"
                onClick={handleClickOpen}
              >
                Recipe
              </Button>
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                  style={{ color: '#ab003c', fontWeight: 'bold' }}
                >
                  {title}
                </DialogTitle>
                <DialogContent dividers>
                  <Typography style={{ color: '#ab003c', fontWeight: 'bold' }}>
                    Recipe
                  </Typography>

                  <CardContent>
                    {ingredients.map(ingredient => (
                      <Typography
                        style={{ color: '#212121', fontWeight: 'bold' }}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        paragraph
                      >
                        {' '}
                        {ingredient.text}
                      </Typography>
                    ))}
                  </CardContent>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                    close
                  </Button>
                </DialogActions>
              </Dialog>
            </div>{' '}
            <br /> <br />
          </CardContent>
        </div>
      
      </Paper>
       </Grid >
        </Grid >
    </div>
  );
};

export default Recipe;
