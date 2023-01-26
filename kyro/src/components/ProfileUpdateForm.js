import React from 'react';
// importing mui joy components
import { Card, Typography, CardContent, Grid } from '@mui/joy';
// importing mui material components
import { Box, InputAdornment, TextField, Button } from '@mui/material';
// importing mui icons
import { 
    PersonRounded,
    MailOutlined,
    PortraitOutlined,
    CallOutlined,
    LocationOnOutlined
} from '@mui/icons-material';
// importing custom component
import ProfileCard from './ProfileCard';


export default function ProfileUpdateForm() {
  return (
    <Box>
        <Grid container sx={{ flexGrow: 1 }}>
            <Grid xs={8}>
                <Typography sx={{ fontWeight: 700, color: 'black', mr:'auto' }}>My Profile</Typography>
                <Card sx={{ mx: 6, mt: 4, mb: 6, minWidth: 500, minHeight: 200, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} raised="true">
                    <CardContent sx={{ my: 6, mx: 7 }}>
                        <Grid container spacing={4} sx={{ flexGrow: 1 }}>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="firstName"
                                    label="First Name"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonRounded sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="LastName"
                                    label="Last Name"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonRounded sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="DisplayName"
                                    label="Display Name"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PortraitOutlined sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="Email"
                                    label="Email"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlined sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="PhoneNoWork"
                                    label="Phone No (Work)"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CallOutlined sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="PhoneNoPersonal"
                                    label="Phone No (Personal)"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CallOutlined sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    variant="outlined"
                                    id="Location"
                                    label="Location"
                                    fullWidth
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnOutlined sx={{ color: "black" }} />
                                        </InputAdornment>
                                    ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Button variant="contained" color="error" sx={{ mx: 'auto', mb: 2, mt: 2 }}>Save Changes</Button>
                </Card>
            </Grid>
            <Grid xs={4}>
                <ProfileCard />
            </Grid>
        </Grid>
    </Box>
  );
}