import {
    Box,
    Typography,
    TextField,
    Button,
    useTheme,
    Link ,
    useMediaQuery
  } from '@mui/material';
  import { styled } from '@mui/material/styles';
  
  const GradientButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(to right, #00D9B3, #15A0DD)',
    borderRadius: '9999px',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    padding: '16px 0',
    marginTop: theme.spacing(1),
    width: '100%',
    boxShadow: '0 8px 20px rgba(0, 217, 179, 0.35)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 10px 24px rgba(21, 160, 221, 0.45)',
      opacity: 0.95,
    },
  }));
  
  const Login = () => {
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
          py: isMobile ? 5 : 8,
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
            mt: isMobile ? 0 : 8,
          }}
        >
          <Box display="flex" justifyContent="center" mb={5}>
            <Box component="img" src="/assets/images/logo.png" alt="Logo" sx={{ height: 60 }} />
          </Box>
  
          <Typography variant="h4" fontWeight="600" mb={4}>
            Login
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
  
  
          <GradientButton>SIGN IN</GradientButton>
  
          <Box textAlign="center" mt={4}>
            <Typography variant="body1" color="text.secondary">
              Don't have an account?{' '}
              <Link href="/Signup" underline="hover" color="primary" fontWeight={600}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Login;
  