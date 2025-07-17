import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const GoogleButton = styled(Button)({
    backgroundColor: '#fff',
    border: '1px solid #F0F0F0',
    borderRadius: '9999px',
    textTransform: 'none',
    color: '#000',
    fontWeight: '600',
    padding: '16px 20px',
    marginTop: '2.5rem',
    width: '100%',
    boxShadow: '0 8px 20px rgba(163, 163, 163, 0.25)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 10px 24px rgba(163, 163, 163, 0.35)',
      opacity: 0.95,
    },
  });
export default GoogleButton;