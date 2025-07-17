import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
  color: '#fff',
  borderRadius: 999,
  padding: theme.spacing(1.5, 3),
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    opacity: 0.9,
  },
}));

const AdvanceAccountSettings = () => {
  return (
    <Box
      display="flex"
      justifyContent={{ xs: 'center', md: 'flex-start' }} // Center on mobile, left on desktop
      alignItems="flex-start"
      mt={{ xs: 4, md: 10 }} // Responsive margin-top
      px={{ xs: 2, md: 0 }} // Horizontal padding on mobile
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: '100%', sm: 3000 }, // Full width on mobile, fixed width on tablet+
          borderRadius: 4,
          p: { xs: 2, sm: 3 },
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <Box mb={4}>
          <Box
            component="img"
            src="/assets/images/logo.png" // Ensure correct path
            alt="Elite Quality Index"
            sx={{
              height: { xs: 30, sm: 40 }, // Scales logo on mobile
              mx: 'auto',
            }}
          />
        </Box>

        {/* Title with Icon */}
        <Typography
          variant="h6"
          fontWeight={600}
          gutterBottom
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <AccountCircleIcon fontSize="small" />
          Account
        </Typography>

        {/* Navigation Buttons */}
        <Stack spacing={2} mt={2}>
          <GradientButton fullWidth startIcon={<SettingsIcon />}>
            General
          </GradientButton>
        </Stack>

        {/* Version */}
        <Typography
          variant="caption"
          color="text.secondary"
          mt={2}
          display="block"
        >
          Version 16.2
        </Typography>
      </Paper>
    </Box>
  );
};

export default AdvanceAccountSettings;
