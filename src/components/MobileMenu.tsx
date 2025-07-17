import { Divider, Drawer, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuItems from './MenuItems';
import AccountBox from './LoginBox';
import ResearchPartners from './ResearchPartners';
import { useLocation } from 'react-router-dom';

const MobileMenu = ({ open = false, onClose = () => {} }) => {
  const location = useLocation();
  const isAdvanceSettings = location.pathname === '/advance-settings';

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 300, height: '100vh' },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Box
            component="img"
            src="/assets/images/logo.png"
            alt="Elite Quality Index"
            sx={{
              height: { xs: 32, sm: 40 },
            }}
          />
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        <MenuItems />
        {!isAdvanceSettings && (
          <>
            <AccountBox />
            <ResearchPartners />
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
