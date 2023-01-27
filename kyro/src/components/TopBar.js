import React from 'react';
// importing mui material components
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	Container,
	Avatar,
	Button,
	MenuItem,
	Card,
	CardHeader,
	Drawer,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
	Divider,
	List,
} from '@mui/material';
// importing mui icons
import {
	MenuRounded,
	ArrowDropDownRounded,
	AddRounded,
	Inbox,
	Mail,
	ChevronLeft
} from '@mui/icons-material';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

  
const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
  }));

function TopBar() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const [open, setOpen] = React.useState(false);

	const handleDrawerClose = () => {
		setOpen(!open);
	};

	return (
		<Box>
			<Drawer
				sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeft />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
							{index % 2 === 0 ? <Inbox /> : <Mail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
			</Drawer>
			<AppBar position="static" style={{ background: "white", border: "none", boxShadow: "none" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
					mr: 2,
					display: { xs: 'none', md: 'flex' },
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'black',
					textDecoration: 'none',
					}}
				>
					KYRO
				</Typography>
				<IconButton
					size="large"
					edge="start"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					aria-label="menu"
					sx={{ ml: 4 }}
					onClick={handleDrawerClose}
				>
					<MenuRounded />
				</IconButton>

				<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
					<Card style={{ border: "none", boxShadow: "none" }}>
						<CardHeader
							title="Good Morning, Adam"
							subheader="April 28, 2022"
							titleTypographyProps={{ ml: 6, fontWeight: 600, variant: 'subtitle1', color: 'black' }}
							subheaderTypographyProps={{ ml: -4, fontWeight: 500, variant: 'caption' }}
						/>
					</Card>
				</Box>
				<Button variant="contained" sx={{ mr: 2 }} color="error" startIcon={<AddRounded />}>Add Project</Button>

				<Box sx={{ flexGrow: 0 }}>
					<Card style={{ border: "none", boxShadow: "none" }}>
						<CardHeader
							avatar={
								<Avatar alt="Remy Sharp" src="avatar.jpg" variant="square" sx={{ borderRadius: '10px', width: 45, height: 45 }} />
							}
							action={
								<IconButton onClick={handleOpenUserMenu} aria-label="settings">
									<ArrowDropDownRounded />
								</IconButton>
							}
							title="Adam Warlock"
							subheader="Product Manager"
							titleTypographyProps={{ fontWeight: 700, color: 'black' }}
							subheaderTypographyProps={{ fontWeight: 100, color: 'black', variant: 'caption' }}
						/>
					</Card>
					<Menu
					sx={{ mt: '45px' }}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}
					>
					{settings.map((setting) => (
						<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting}</Typography>
						</MenuItem>
					))}
					</Menu>
				</Box>
				</Toolbar>
			</Container>
			</AppBar>
		</Box>
	);
}
export default TopBar;