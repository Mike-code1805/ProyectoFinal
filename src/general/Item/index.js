import React from 'react'
import { Link, Typography } from '@mui/material';
import Icofont from '../Icofont';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemM1: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    '& .Icofont': {
      marginRight: 12
    },
    '& .itemM1__text': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& .MuiTypography-root': {
      fontSize: 12,
      lineHeight: '15px'
    },
    '& .MuiLink-root': {
      textDecoration: 'none'
    }
  }
}));

const CustomLink = ({ link }) => {
  const { text, href } = link;
  return ( <Link variant="caption" href={href}>{ text }</Link> )
}

const CustomText = ({ text }) => {
  return ( <Typography variant="caption">{ text }</Typography> )
}

const Item = ({ icon, name, link, text }) => {
  const classes = useStyles();

  return (
    <li className={classes.itemM1}>
      <Icofont icon={icon}/>
      <div className='itemM1__text'>
        <Typography variant="caption" display='block'>{ name }</Typography>
        { link && <CustomLink link={link}/> }
        { text && <CustomText text={text}/> }
      </div>
    </li>
  )
}

export default Item;
