import React from 'react';
// mui joy components
import {Card, Typography, IconButton, CardCover, CardContent} from '@mui/joy';
// mui material components
import { Box, Stack } from '@mui/material';
// mui icons
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';


export default function ProfileCard() {
  return (
    <Box sx={{background: "#f1f5f9", height: "100%"}} display="flex"
    justifyContent="center"
    minHeight="100vh">
        <Stack>
            <Card raised="true" sx={{ minWidth: 200, minHeight: 200, mt: 10, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <CardCover>
                    <img
                        src="avatar.jpg"
                        alt=""
                    />
                </CardCover>
                <CardContent>
                    <IconButton
                        variant="solid"
                        size="lg"
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            borderRadius: '10px',
                            right: '0rem',
                            bottom: '1rem',
                            transform: 'translateX(50%)',
                            backgroundColor: 'white'
                        }}
                    >
                        <CameraAltTwoToneIcon />
                    </IconButton>
                </CardContent>
            </Card>
            <Typography level="h1" sx={{ fontWeight: 700, color: 'black', mt: 3 }}>
                Adam Warlock
            </Typography>
            <Typography level="body2" sx={{ fontWeight: 400, mt: 1, mb: 2 }}>
                rajesh@gmail.com
            </Typography>
        </Stack>
    </Box>
  );
}