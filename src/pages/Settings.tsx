import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import AdvanceGeneralSettings from '../components/AdvanceGeneralSettings';
import AdvanceSystemSettings from '../components/AdvanceSystemSettings';
import Header from '../components/Header';
import MenuItems from '../components/MenuItems';

const AdvanceSettings = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 2, sm: 5 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box mb={4}>
          <Header userName="John Deo" />
        </Box>

        {/* Main Content Layout (Sidebar + Settings) */}
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' }, // Flex row on desktop, block on mobile
            gap: 4,
          }}
        >
          {/* Sidebar */}



          {isMobile ? '' : 
            <Box
            sx={{
              width: isMobile ? '100%' : 300,
              maxHeight: '280px',
              backgroundColor: 'white',
              px: { xs: 1, md: 2 },
              pb: 5,
              ml: { md: 3 },
              filter: 'drop-shadow(-1.816px 3.564px 49px rgba(0, 0, 0, 0.059))',
              borderRadius: 8,
            }}
            >
              <Box mt={4}>
                <img
                  src="assets/images/logo.png"
                  alt="Elite Quality Index"
                  style={{ height: 40, margin: '0 auto' }}
                />
              </Box>

              <Box sx={{ backgroundColor: '#F2F6F8', borderRadius: 8, px: 3, py: 4, mt: 3 }}>
                <Typography variant='h6' >Account</Typography>
                <MenuItems />
              </Box>
            </Box>
            }
          
          

          {/* Main Content */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                p: 0, // Removed padding
              }}
            >
              <AdvanceGeneralSettings />
            </Box>

            <Box
              sx={{
                borderRadius: 3,
                p: 0, // Removed padding
              }}
            >
              <AdvanceSystemSettings />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AdvanceSettings;
