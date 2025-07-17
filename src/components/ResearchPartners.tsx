import { Box, Typography, Paper} from '@mui/material';

const ResearchPartners = () => {
  return (
<Box display="flex" justifyContent="center" alignItems="center" mt={1}>
  <Paper
    sx={{
      width: 280,
      borderRadius: 4,
      backgroundColor: '#F8F8F8',
      p: 2,
      textAlign: 'center',
      boxShadow: 0,
    }}
  >

    {/* Logo */}
    <Box mb={0} textAlign="center">

        <Typography variant="h6" fontWeight={600} gutterBottom sx={{mb: 1}}>
            Research Partners
        </Typography>


        <img
            src="assets/images/leaf2.png"
            alt="leaf"
            style={{ width: 300, objectFit: 'contain', marginBottom: 10}}
        />
        </Box>
    </Paper>
</Box>

  );
};

export default ResearchPartners;
