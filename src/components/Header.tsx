import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  Button,
  useTheme,
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MobileMenu from './MobileMenu';

const Header = ({ userName = "John Smith", showLogo = false }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  showLogo = isMobile;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };
  

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, sm: 4 },
        pt: { xs: 2, sm: 3 },
        flexWrap: 'wrap',
        width: isMobile ? '100%' : '90%',
        mx: 'auto',
      }}
    >

      


      {/* Logo (optional) */}
      <Box>
        {showLogo && (
          <Box
            component="img"
            src="/assets/images/logo.png"
            alt="Logo"
            sx={{
              height: 35,
              width: 'auto',
            }}
          />
        )}
      </Box>

      {/* User Profile Card with Online Dot */}
      <Box
        onClick={handleMenuOpen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 3,
          px: 2,
          py: 1,
          cursor: 'pointer',
          boxShadow: 0,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: 3,
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        {/* Avatar with Online Dot */}
        <Box sx={{ position: 'relative', mr: 1 }}>
          <Avatar
            alt="User Avatar"
            src="/assets/images/user-profile.png"
            sx={{ width: 40, height: 40 }}
          />
          {/* Online Dot */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 10,
              height: 10,
              backgroundColor: '#8B5CF6', // Purple dot
              borderRadius: '50%',
              border: '2px solid white',
            }}
          />
        </Box>

        {!isMobile && (
          <Typography variant="body2" color="text.primary" sx={{ mr: 1 }}>
            {userName}
          </Typography>
        )}
        <ArrowDropDownIcon />
      </Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            width: 200,
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      {isMobile ? <MobileMenu open={menuOpen} onClose={toggleMenu}/> : '' }
      {isMobile ? <Button sx={{ backgroundColor: '#fff', py: 1.9, borderRadius: 3}} onClick={toggleMenu}>
            <MenuOpenIcon />
          </Button> : '' }
    </Box>
  );
};

export default Header;
