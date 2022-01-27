import React from 'react';

const Icofont = ({ icon, size }) => {
    const iconsmap = {
        'twitter':    { icon: 'twitter',  color: 'rgb(29, 161, 242)' },
        'linkedin':   { icon: 'linkedin', color: 'rgb(0, 115, 177)' },
        'youtube':    { icon: 'youtube',  color: 'rgb(255, 0, 0)' },
        'cellphone':  { icon: 'ui-touch-phone', color: 'rgb(143, 143, 144)' },
        'email':      { icon: 'ui-email',       color: 'rgb(143, 143, 144)' },
        'address':    { icon: 'location-pin',   color: 'rgb(143, 143, 144)' },
      }
  const { icon: iconName, color: iconColor } = iconsmap[icon];
  return (
    <span 
      className={
        'icofont-' + iconName
        + ' Icofont'
      } 
      style={{ fontSize: size, color: iconColor }}
    />
  )
}

Icofont.defaultProps = {
  size:   20
}

export default Icofont;