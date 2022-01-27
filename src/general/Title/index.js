import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.secondary,
  }
}));

const Title = ({ text }) => {
  const classes = useStyles();

  return (
    <Typography
      component="h1" 
      variant="h6" 
      color="initial"
      className={classes.title}
      gutterBottom
    >{ text }</Typography>
  )
}

export default Title;