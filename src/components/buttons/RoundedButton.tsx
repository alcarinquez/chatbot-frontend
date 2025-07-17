import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const RoundedLinkButton = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
    backgroundImage: active ? 'linear-gradient(180deg, #06CABE, #11ACD3)' : 'none',
    backgroundColor: active ? 'transparent' : '#F2F6F8',
    color: active ? '#fff' : '#333',
    border: 'transparent',
    borderRadius: 999,
    padding: theme.spacing(1.5, 3),
    fontWeight: 700,
    textTransform: 'none',
    justifyContent: 'flex-start',
    width: '100%',
    '&:hover': {
      backgroundImage: 'linear-gradient(180deg, #06CABE, #11ACD3)',
      border: 'transparent',
      color: '#fff',
        '& img': {
        filter: 'brightness(0) invert(1)',
      },
    },
  }));
export default RoundedLinkButton;