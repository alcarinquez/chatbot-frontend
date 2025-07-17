import { Box, Container} from '@mui/material';
import GradientButton from '../components/buttons/GradientButton';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header showLogo={true} />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          mx: 'auto',
          width: '95%',
          maxWidth: 800,
        }}
      >
        <Container sx={{  backgroundColor: '#fff', p:8, borderRadius: 6}}>
          <Box
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src="/assets/images/pagenotfound.png"
              alt="Page not found"
              sx={{
                width: '100%',
                maxWidth: 500,
                mx: 'auto',
              }}
            />

            <Box sx={{ mt: 5 }}>
              <GradientButton onClick={() => navigate('/')}>
                Go to Homepage
              </GradientButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
