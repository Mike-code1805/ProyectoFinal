import React from 'react'
import Title from '../general/Title'
import CardLayout from '../general/CardLayout';
import Item from '../general/Item';
import UserBasicInformation from '../general/UserBasicInformation';
import CareerItem from '../general/CareerItem';
import { CardContent, Container, Grid } from '@mui/material';
import { getUserInformation } from '../general/getUserInformation';

const AboutMe = () => {

  const users = getUserInformation ({ userid: 1 });

  return (
    <>
      <Container maxWidth="md">
        <Title text='Perfil del estudiante' />
        <Grid container spacing={3} style={{ paddingBottom: 24 }}>
          <Grid item xs={12} sm={6}>
            <UserBasicInformation user={users} />
            <CardLayout title='Redes Sociales'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { 
                    users.social.map(item => (
                      <Item 
                        key={item.id}
                        icon={item.icon} 
                        name={item.name}
                        link={item.link}
                      />
                    ))
                  }
                </ul>
              </CardContent>
            </CardLayout>
            <CardLayout title='Información de contacto'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { 
                    users.contact.map( item => (
                      <Item 
                        key={item.id}
                        icon={item.icon} 
                        name={item.name}
                        text={item.text}
                      />
                    ))
                  }
                </ul>
              </CardContent>
            </CardLayout>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardLayout title='Experiencia'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { users.experience.map( item => <CareerItem key={item.id} data={item}/> )}
                </ul>
              </CardContent>
            </CardLayout>
            <CardLayout title='Educación'>
              <CardContent style={{ paddingTop: 0 }}>
                <ul style={{ margin: 0, padding: 0 }}>
                  { users.education.map( item => <CareerItem key={item.id} data={item}/> )}
                </ul>
              </CardContent>
            </CardLayout>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMe;

