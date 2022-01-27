import React from 'react'
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  CareerItem: {
    listStyle: 'none',
    marginBottom: 12,
    '&:last-child': {
      marginBottom: 0
    }
  }
}));

const CareerItem = ({ data }) => {
  const { time, career, place } = data;
  const classes = useStyles();

  return (
    <li className={classes.CareerItem}>
      <div className='d-flex flex-column align-items-start'>
        <Typography variant="caption">{ time }</Typography>
        <Typography variant="caption">
          <b>{ career }</b> - { place }
        </Typography>
      </div>
    </li>
  )
}

export default CareerItem;