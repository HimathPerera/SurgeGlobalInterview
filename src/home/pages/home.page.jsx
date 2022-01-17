import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import { ReactComponent as UndrawP1 } from "../../assests/undraw_p1.svg";

export default function HomePage() {

    const myStyle = { 
        getStarted: {
          backgroundColor:"#1B1A64"
        },
        organize: {
            display: "flex",
            justifyContent:"center"
        },
        secGetStarted: {
            marginTop: "30px",
            ['@media (min-width:600px)']: {
                marginTop: "150px"
              }
        },
        undraw: {
            ['@media (min-width:600px)']: {
                marginLeft: "150px"
              }
        }
      }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
                    <Box sx={ myStyle.undraw} mt={5}><UndrawP1/></Box>
          </Grid>
          <Grid item xs={12} md={6}>
                    <div>
                        <Box sx={ myStyle.secGetStarted}>
                        <Box textAlign='center' sx={myStyle.organize}><Typography variant="h3" ><strong>Get Organized with ToDo’s</strong></Typography></Box>    
                            <Box mt={2} textAlign='center'><Button variant="contained" sx={myStyle.getStarted} disableElevation>
                                
                <Link to="/test" >Get Started</Link>
                            </Button></Box>
                            </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    )
}
