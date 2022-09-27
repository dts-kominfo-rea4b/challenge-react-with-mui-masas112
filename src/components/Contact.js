// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import { Grid } from '@mui/material';

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },
    },
});


// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: 1,
                    borderRadius: 2,
                    p: 3,
                    minWidth: 1 / 2,
                    margin: 3,
                }}
            >

                <Grid container>
                    <Grid xs={4}>
                        <img className='Gambar' src={data.photo} alt={data.title} />
                    </Grid>
                    <Grid xs={8}>
                        <Box sx={{ color: 'text.secondary', fontSize: 16 }}>{data.name}</Box>
                        <Box sx={{ color: 'text.primary', fontSize: 14, fontWeight: 'medium' }}>
                            {data.phone}
                        </Box>
                        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                            {data.email}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    </>);
};

export default Contact;
