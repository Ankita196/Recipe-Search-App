import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
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

const Recipe = ({ title, calories, image, ingredients }) => {
  const classes = useStyles();
 

  

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
         
          title={title}
          
        />
        <Typography>Calories :{calories}</Typography>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent >
          <Typography variant="body2" color="textSecondary" component="p">
          <IconButton aria-label="share">
          <ShareIcon />  <Typography style={{marginLeft:90}}>Check All Details</Typography>
        </IconButton>
                    
          </Typography>
         
        </CardContent>
        
      
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
