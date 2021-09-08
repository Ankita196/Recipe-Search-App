import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

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

const Recipe = ({ title, calories, image, ingredients, shareAS }) => {
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
      <Card className={classes.root}>
        <CardHeader className={classes.media} title={title} />
        <Typography style={{ marginLeft: 30 }}>Calories :{calories}</Typography>
        <img
          src={image}
          style={{ height: '75%', width: '75%', display: 'block' }}
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
      </Card>
    </div>
  );
};

export default Recipe;
