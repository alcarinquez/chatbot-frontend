import { Box, Typography, Button, Divider, Paper } from '@mui/material';

const SystemSettings = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        boxShadow: 0,
        p: { xs: 3, sm: 5 },
        mx: 'auto',
        mb: { sm: 1, md: 5 },
        width: '100%',
        maxWidth: '960px',
      }}
    >
      <Typography variant="h4" fontWeight={600} gutterBottom>
        System
      </Typography>

      <Typography variant="body2" sx={{ maxWidth: '768px', mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </Typography>

      <Divider sx={{ maxWidth: '768px', borderColor: '#D1D5DB', mb: 3 }} />

      {/* System Options */}
      {[
        {
          title: 'Active Account',
          description: 'You are signed in as aamirabbas72150',
          buttonText: 'Sign Out',
          buttonColor: 'black',
          hoverColor: '#111',
        },
        {
          title: 'Sign out of all sessions',
          description: 'Devices or browsers where you are signed in',
          buttonText: 'Sign Out All Screens',
          buttonColor: 'black',
          hoverColor: '#111',
        },
        {
          title: 'Delete account',
          description: 'Permanently delete your account and data',
          buttonText: 'Learn More',
          buttonColor: '#D0DBE0',
          hoverColor: '#c0c9ce',
          textColor: 'black',
        },
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: '#F5F5F5',
            borderRadius: 3,
            py: { xs: 3, sm: 4 },
            px: { xs: 3, sm: 7 },
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: '500',
                backgroundColor: item.buttonColor,
                color: item.textColor || 'white',
                boxShadow: 'none',
                px: { xs: 3, sm: 6 },
                py: 1,
                borderRadius: 2,
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: item.hoverColor || '#f0f0f0',
                  boxShadow: 'none',
                },
              }}
            >
              {item.buttonText}
            </Button>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default SystemSettings;
