import { Box, Button, Typography, Paper, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { Link  } from 'react-router-dom';

const RoundedButton = styled(Button)({
  backgroundColor: '#fff',
  color: '#333',
  borderRadius: 999,
  padding: '10px 20px',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const Signup = styled(Button)({
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: 999,
  padding: '10px 20px',
  fontWeight: 500,
  textTransform: 'none',
});

const LoginBox = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" mt={1}>
      <Paper
        sx={{
          width: 380,
          borderRadius: 4,
          p: 2,
          backgroundColor: '#F2F6F8',
          boxShadow: 0,
          mr:0,
        }}
      >
        {/* Logo */}
        {/* <Box mb={4}>
          <img
            src="assets/images/logo.png"
            alt="Elite Quality Index"
            style={{ height: 40, margin: '0 auto' }}
          />
        </Box> */}

        {/* Title */}
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Your Account
        </Typography>

        {/* Navigation Buttons */}
        <Stack spacing={1} mt={2}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <RoundedButton fullWidth>Login</RoundedButton>
          </Link>
          <Link to="/Signup" style={{ textDecoration: 'none' }}>
             <Signup fullWidth>Sign Up</Signup>
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginBox;
