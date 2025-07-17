import { Box, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import RoundedLinkButton from './buttons/RoundedButton';



const MenuItems = () => {
  const location = useLocation();
  const isAdvanceSettings = location.pathname === '/settings';

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
      <Stack spacing={1} sx={{ width: '100%', maxWidth: 280, textAlign: 'left' }}>
        {isAdvanceSettings ? (
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <RoundedLinkButton active startIcon={
              <Box component="img" src="/assets/images/general.svg" alt="General" sx={{ 
                width: 14, 
                ml: 5, 
                filter: 'brightness(0) invert(1)',  // Apply filter for white color on active
              }} />
            }>
              General
            </RoundedLinkButton>
          </Link>
        ) : (
          <>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <RoundedLinkButton active={location.pathname === '/'} startIcon={
                <Box component="img" src="/assets/images/chat.svg" alt="Chat" sx={{ 
                  width: 18, 
                  ml: 5, 
                  filter: location.pathname === '/' || location.pathname === '/' ? 'brightness(0) invert(1)' : 'none', // White on active or hover
                }} />
              }>
                New Chat
              </RoundedLinkButton>
            </Link>

            <Link to="/chat-history" style={{ textDecoration: 'none' }}>
              <RoundedLinkButton active={location.pathname === '/chat-history'} startIcon={
                <Box component="img" src="/assets/images/history.svg" alt="History" sx={{ 
                  width: 19, 
                  ml: 5, 
                  filter: location.pathname === '/chat-history' || location.pathname === '/chat-history' ? 'brightness(0) invert(1)' : 'none', // White on active or hover
                }} />
              }>
                Chat History
              </RoundedLinkButton>
            </Link>

            <Link to="/bookmarks" style={{ textDecoration: 'none' }}>
              <RoundedLinkButton active={location.pathname === '/bookmarks'} startIcon={
                <Box component="img" src="/assets/images/bookmark.svg" alt="Bookmarks" sx={{ 
                  width: 14, 
                  ml: 5, 
                  filter: location.pathname === '/bookmarks' || location.pathname === '/bookmarks' ? 'brightness(0) invert(1)' : 'none', // White on active or hover
                }} />
              }>
                Bookmarks
              </RoundedLinkButton>
            </Link>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MenuItems;
