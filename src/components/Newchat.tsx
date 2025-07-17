import { Box, Button, Paper, Stack } from '@mui/material';
import { styled } from '@mui/system';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';

const BaseButton = styled(Button)({
  borderRadius: 999,
  padding: '10px 20px',
  fontWeight: 500,
  textTransform: 'none',
  justifyContent: 'flex-start', // aligns icon and text evenly
  gap: '12px', // space between icon and text
});

const GradientButton = styled(BaseButton)({
  background: 'linear-gradient(to right, #14b8a6, #06b6d4)',
  color: '#fff',
  '&:hover': {
    opacity: 0.9,
  },
});

const RoundedButton = styled(BaseButton)({
  backgroundColor: '#fff',
  color: '#333',
  border: '1px solid #ccc',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const Newchat = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="flex-start" mt={4}>
      <Paper
        elevation={0}
        sx={{
          width: 380,
          borderRadius: 4,
          p: 3,
          textAlign: 'center',
        }}
      >
        <Box mb={4}>
          <img
            src="assets/images/logo.png"
            alt="Elite Quality Index"
            style={{ height: 40, margin: '0 auto' }}
          />
        </Box>

        <Stack spacing={2} mt={2}>
          <GradientButton fullWidth startIcon={<ChatIcon />}>
            New Chat
          </GradientButton>
          <RoundedButton fullWidth startIcon={<HistoryIcon />}>
            Chat History
          </RoundedButton>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Newchat;
