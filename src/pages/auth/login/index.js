import React from 'react'
import { Avatar, Grid, Container } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import AuthLayout from '../../../components/layaouts/authLayout';


const Login = () => {



    const btnStyle = { backgroundColor: 'purple' }
    const loginStyle = { 
        background: 'white',
        height: 500,
        
    }
    const loginRigthStyle = { background: 'rgb(39,34,98)', height: 500 }
    return (
        <AuthLayout>
        <Grid item xs={24} justify="center" style={{padding:125}}>
        <Container maxWidth="md">
            <Grid container spacing={0} > 
            <Grid item xs={12} md={5}>
                <div style={loginRigthStyle}></div>
            </Grid>
            <Grid item xs={12} md={5} align="center">
                <div style={loginStyle}>
                <Avatar 
                    src='http://medic-app-react.next-item.com//content/user-40-1.jpg' 
                    alt="Remy Sharp"
                    sx={{ width: 60, height: 60 }}
                    ></Avatar>
                <h1>Account Login</h1>
                <Grid style={{padding:10}}>
                    <TextField label="Username" placeholder='Ingrese el usuario' id="outlined-required"  fullWidth required></TextField>
                    <br/><br/>
                    <TextField label="Password" placeholder='Ingrese la contraseña' id="outlined-password-input" v type='password' fullWidth required></TextField>
                    <FormControlLabel

                    control={
                        <Checkbox
                        name="checked8"
                        color="secondary"                      
                        />
                    }
                    label="Recordar"
                    
                    />
                    <Button 
                        type='submit'
                        variant='contained' 
                        style={btnStyle} 
                        color='primary' 
                        fullWidth
                        href="/"
                    >Ingresar
                    </Button>
                    <br/><br/>
                    <Typography >
                    <Link href="#" align="right">
                        ¿Te olvidaste tu contraseña?
                    </Link>
                    </Typography><br/>
                    <Typography> ¿No tienes una cuenta?
                    <Link href="/auth/register" align="right">
                        {'registrar'}
                    </Link>
                    </Typography>
                    <Typography> Ir al <Link href="/" align="right"> inicio</Link></Typography>
                </Grid>
                </div>
            </Grid>
            </Grid>
        </Container>
        </Grid>
        </AuthLayout>
    )
}

export default Login;