import { Box, Typography, Paper } from '@mui/material';
import MenuItems from './MenuItems';


const AccountSettings = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      mt={{ xs: 2, sm: 4 }}
      px={{ xs: 2, sm: 0 }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 280,
          borderRadius: 4,
          p: { xs: 2, sm: 3 },
          textAlign: 'center',
        }}
      >
        {/* Logo */}
          <Box mb={4}>
            <Box
              component="img"
              src="/assets/images/logo.png" 
              alt="Elite Quality Index"
              sx={{
                height: { xs: 32, sm: 40 },
                mx: 'auto',
              }}
            />
          </Box>
  
          {/* Title */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Account
          </Typography>
        <MenuItems />
      </Paper>
    </Box>
  );
};

export default AccountSettings;
