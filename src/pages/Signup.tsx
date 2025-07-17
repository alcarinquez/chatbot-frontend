import {
  Box,
  Typography,
  TextField,
  Link,
  useTheme,
  useMediaQuery
} from '@mui/material';
import EmailButton from '../components/buttons/EmailButton';
import GoogleButton from '../components/buttons/GoogleButton';
import GradientButton from '../components/buttons/GradientButton';


const Signup = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('/assets/images/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        py: isMobile ? 3 : 3,
      }}
    >
      <Box
        sx={{
          width: '95%',
          maxWidth: 550,
          bgcolor: 'white',
          borderRadius: 4,
          boxShadow: '0 8px 20px rgba(180, 182, 182, 0.35)',
          px: isMobile ? 2 : 5,
          py: isMobile ? 4 : 6,
          mt: isMobile ? 4 : 6,
        }}
      >
        <Box display="flex" justifyContent="center" mb={5}>
          <Box component="img" src="/assets/images/logo.png" alt="Logo" sx={{ height: 60 }} />
        </Box>

        <Typography variant="h4" fontWeight="600" mb={4}>
          Sign up
        </Typography>

        <Typography variant="body1" fontWeight="500">
          Email
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type Your Email Address"
          margin="normal"
          InputProps={{
            sx: {
              borderRadius: 2,
              backgroundColor: '#f3f4f6',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E3E3E3', // your custom outline color
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#14b8a6', // outline color on hover
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#0ea5e9', // outline color when focused
              },
            },
          }}
        />

        <GradientButton>SIGN UP</GradientButton>

        <Box textAlign="center" mt={4}>
          <Typography variant="body1" color="text.secondary">
            Already have an account?{' '}
            <Link href="/login" underline="hover" color="primary" fontWeight={600}>
              Sign in
            </Link>
          </Typography>
        </Box>

        <Box>
          <GoogleButton
            startIcon={
              <Box component="img" src="/assets/images/google-icon.png" alt="Google" sx={{ width: 28, height: 28 }} />
            }
          >
            Sign up with Google
          </GoogleButton>

          <Box>
            <EmailButton
              startIcon={
                <Box component="img" src="/assets/images/email.png" alt="Email" sx={{ width: 28, height: 28 }} />
              }
            >
              Sign up with Email
            </EmailButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
