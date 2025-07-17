import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(180deg, #00D9B3, #15A0DD)',
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
export default GradientButton;