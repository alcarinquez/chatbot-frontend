import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import ResearchPartners from '../components/ResearchPartners';
import LoginBox from '../components/LoginBox';
import HelpInputBox from '../components/HelpInputBox';
import Header from '../components/Header';
import MenuItems from '../components/MenuItems';

const ChatBot = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        backgroundImage: 'url(/assets/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      {/* Sidebar */}

      {isMobile ? '' : 
      <Box
       sx={{
        width: isMobile ? '100%' : 280,
        backgroundColor: 'white',
        maxHeight: '90dvh',
        overflowY: 'auto',
        px: { xs: 1, md: 2 },
        mt: 5, 
        ml: { md: 3 },
        filter: 'drop-shadow(-1.816px 3.564px 49px rgba(0, 0, 0, 0.059))',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
      className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-200"
      >
        <Box mt={2}>
          <img
            src="assets/images/logo.png"
            alt="Elite Quality Index"
            style={{ height: 40, margin: '0 auto' }}
          />
        </Box>
        
        <Box>
          <MenuItems />
        </Box>
        
        <Box >
          <LoginBox />
        </Box>

        <Box>
          <ResearchPartners />
        </Box>
      </Box>
      }

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          py: { xs: 1, md: 2 },
          px: { xs: 0, md: 5 },
        }}
      >
        <Container maxWidth="lg" sx={{ width: '100%', p: {xs:0}, }}>
          <Header userName="John Smith" />
          <Box
            mt={2}
            sx={{
              maxWidth: 1050,
              width: '100%',
              mx: 'auto',
            }}
          >
            <HelpInputBox />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ChatBot;
