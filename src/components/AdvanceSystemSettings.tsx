import { Box, Typography, Button, Divider, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';


const AdvanceSystemSettings = () => {
  const systemActions = [
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
      textColor: 'black',
      hoverColor: '#c0c9ce',
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 4,
        p: { xs: 3, sm: 5 },
        mx: 'auto',
        mb: 3,
        width: '100%',
        maxWidth: '960px',
        boxShadow: '0 8px 20px rgba(180, 182, 182, 0.35)',
      }}
    >
      <Typography variant="h4" fontWeight={600} gutterBottom>
        System
      </Typography>

      <Typography variant="body2" sx={{ maxWidth: '768px', mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>

      <Divider sx={{ maxWidth: '768px', borderColor: '#D1D5DB', mb: 3 }} />

      {/* Action Sections */}
      {systemActions.map((item, index) => (
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
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  textTransform: 'none',
                  fontWeight: '500',
                  backgroundColor: item.buttonColor,
                  color: item.textColor || 'white',
                  boxShadow: 'none',
                  px: { xs: 2, sm: 5 },
                  py: 1,
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: item.hoverColor,
                  },
                }}
              >
                {item.buttonText}
              </Button>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Paper>
  );
};

export default AdvanceSystemSettings;
