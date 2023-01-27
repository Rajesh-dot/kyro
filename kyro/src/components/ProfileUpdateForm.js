import React from 'react';
// importing mui joy components
import { Card, Typography, CardContent, Grid } from '@mui/joy';
// importing mui material components
import { Box, InputAdornment, TextField, Button, Stack } from '@mui/material';
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
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [displayName, setDisplayName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phonePersonal, setPhonePersonal] = React.useState("");
    const [phoneWork, setPhoneWork] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [userData, setUserData] = React.useState({}); // state variable to store the user data

    React.useEffect(() => {
        // featching user data from the backend
        fetch('https://kyro.onrender.com/user/01GQSVRKV1MPDPES1QFEKTQ6NB')
          .then(res => res.json())
          .then(data => setData(data));
    }, []);

    const setData = (data) => {
        // Initializing the state variables with the data from the backend
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setDisplayName(data.display_name);
        setEmail(data.email);
        setPhonePersonal(data.phone_personal);
        setPhoneWork(data.phone_work);
        setLocation(data.location);
        setUserData(data);
    }

    const updateData = () => {
        const requestJson = {
            "display_name": displayName,
            "phone_work": phoneWork,
            "phone_personal": phonePersonal,
            "email": email,
            "first_name": firstName,
            "last_name": lastName,
            "location": location
        }
        // updating the user data in the backend
        fetch('https://kyro.onrender.com/update_user/01GQSVRKV1MPDPES1QFEKTQ6NB', {
            method: 'POST',
            body: JSON.stringify(requestJson),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error(error));
        console.log(userData)
    }

    const resetData = () => {
        // resetting the state variables to the initial values
        setFirstName(userData.first_name);
        setLastName(userData.last_name);
        setDisplayName(userData.display_name);
        setEmail(userData.email);
        setPhonePersonal(userData.phone_personal);
        setPhoneWork(userData.phone_work);
        setLocation(userData.location);
    }

    return (
        <Box>
            <Grid container sx={{ flexGrow: 1 }}>
                <Grid xs={12} sm={12} md={6} lg={8}>
                    <Typography sx={{ fontWeight: 700, color: 'black', mr:'75%' }}>My Profile</Typography>
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
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
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
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
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
                                        value={displayName}
                                        onChange={(e) => setDisplayName(e.target.value)}
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        value={phoneWork}
                                        onChange={(e) => setPhoneWork(e.target.value)}
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
                                        value={phonePersonal}
                                        onChange={(e) => setPhonePersonal(e.target.value)}
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
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={20}>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ mb: 2, mt: 2, borderRadius: '5px' }}
                                onClick={updateData}
                            >
                                Save Changes
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                sx={{ mb: 2, mt: 2, borderRadius: '5px' }}
                                onClick={resetData}
                            >
                                Reset
                            </Button>
                        </Stack>
                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={4}>
                    <ProfileCard
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        displayName={displayName}
                        phonePersonal={phonePersonal}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}