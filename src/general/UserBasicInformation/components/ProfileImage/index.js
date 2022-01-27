import React from 'react';
import { CardMedia } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  }
}));

const ProfileImage = ({ image }) => {
  const classes = useStyles();

  return (
    <CardMedia 
      component='img'
      alt='user profile image'
      image={image}
      className={classes.image}
    />
  )
}

export default ProfileImage;