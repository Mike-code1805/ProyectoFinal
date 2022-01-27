import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 24,
    '&:last-child': {
      marginBottom: 0
    }
  }
}));

const CardLayout = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card 
      elevation={5}
      className={classes.root}
    >
      { 
        title && (
          <CardContent>
            <Typography variant='h6' color='text.secondary'>{ title }</Typography> 
          </CardContent>
        )
      }
      { children }
    </Card>
  )
}

export default CardLayout;