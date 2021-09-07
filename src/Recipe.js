import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height:500
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

const Recipe = ({ title, calories, image, ingredients ,mealType}) => {
  const classes = useStyles();
 

  

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
         className={classes.media}
          title={title}
          
        />
        <Typography style={{marginLeft:30}}>Calories :{calories}</Typography>
        <img
                      src={image}
                      style={{ height: '75%', width: '75%', display: 'block' }}
                      className={classes.media}
                    />
        <div style={{display:"flex", justifyContent: 'center',}}> 
        <CardContent >
        
        <Button variant="contained" color="primary" style={{ width:250}}>
        Recipe
      </Button> <br/> <br/>
      <Button variant="contained" color="primary" style={{ width:250}}>
      Ingrediants
      </Button>
        
        </CardContent>
       </div>
            {/* {mealType.map(mealtype => (
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                paragraph
              >
              {' '}
             {mealType.source}
              </Typography>
            ))} */}
           
      
          {/* <CardContent>
            {ingredients.map(ingredient => (
              <Typography
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
        */}
      </Card>
    </div>
  );
};

export default Recipe;
