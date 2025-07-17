import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Divider,
  Paper,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { SelectChangeEvent } from '@mui/material/Select';

const AdvanceGeneralSettings = () => {
  const [language, setLanguage] = useState('en');
  const [dob, setDob] = useState({ day: '04', month: '12', year: '1999' });
  const [organization, setOrganization] = useState('google');

const handleChange = (event: SelectChangeEvent) => setLanguage(event.target.value as string);
const handleOrganizationChange = (event: SelectChangeEvent) => setOrganization(event.target.value as string);

const handleDobChange = (field: keyof typeof dob) => (event: React.ChangeEvent<HTMLInputElement>) => setDob((prev) => ({ ...prev, [field]: event.target.value }));

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          p: { xs: 3, sm: 5 },
          mb: 3,
          mx: 'auto',
          width: '100%',
          maxWidth: '960px',
          boxShadow: '0 8px 20px rgba(180, 182, 182, 0.35)',
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          General Setting
        </Typography>

        <Typography variant="body2" sx={{ maxWidth: '768px', mb: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>

        <Divider sx={{ maxWidth: '768px', borderColor: '#D1D5DB', mb: 3 }} />

        {/* Profile Section */}
        <Box 
          sx={{ 
            backgroundColor: '#F5F5F5', 
            borderRadius: 3, 
            p: { xs: 2, sm: 4 }, 
            mb: 3 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on tablet/desktop
              gap: 3,
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
            }}
          >
            {/* Avatar + Name + Edit Button */}
            <Box 
              display="flex" 
              alignItems="center" 
              gap={2} 
              flexWrap="wrap"
            >
              <Avatar 
                alt="User Profile" 
                src="/assets/images/profile.svg" 
                sx={{ width: 56, height: 56 }} 
              />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @johndoe
                </Typography>
              </Box>

              {/* Edit Button */}
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  borderRadius: '50%',
                  minWidth: '40px',
                  width: '40px',
                  height: '40px',
                  padding: 0,
                  boxShadow: 'none',
                  backgroundColor: '#e0e0e0',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#d5d5d5',
                  },
                }}
              >
                <EditIcon fontSize="small" />
              </Button>
            </Box>

            {/* Change Image Button */}
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                px: 3,
                py: 1.3,
                borderRadius: 3,
                '&:hover': { backgroundColor: 'black', color: 'white', boxShadow: 'none' },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Change Image
            </Button>
          </Box>
        </Box>

        {/* Email */}
        <Box sx={{ backgroundColor: '#F5F5F5', borderRadius: 3, p: { xs: 2, sm: 4 }, mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on tablet/desktop
              gap: 2,
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
            }}
          >
            

            <Box sx={{ display: 'flex',flexDirection: { xs: 'column', sm: 'row' }, gap: 2,}}>
              <Typography variant="h6" fontWeight={600} gutterBottom>Email</Typography>
              <TextField
                value="Placeholder123@gmail.com" 
                size="small"
                sx={{
                  flex: 1,
                  minWidth: 250, 
                  background: '#fff',
                  border: 'none', 
                  borderRadius: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', 
                    },
                  },
                }}
              />
            </Box>
            <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  fontWeight: '600',
                  backgroundColor: 'white',
                  color: 'black',
                  boxShadow: 'none',
                  borderRadius: 3,
                  px: 3,
                  py: 1.3,
                  '&:hover': { backgroundColor: 'black', color: 'white', boxShadow: 'none' },
                }}
              >
                Change Email
            </Button>
            
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: '#F5F5F5',
            borderRadius: 3,
            p: { xs: 2, sm: 4 },
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on tablet/desktop
              gap: 2,
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
            }}
          >
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Date Of Birth
            </Typography>

            {/* Map over day, month, year to create text fields */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              {(['day', 'month', 'year'] as Array<keyof typeof dob>).map((field) => (
                <TextField
                  key={field}
                  value={dob[field]}
                  onChange={handleDobChange(field)}
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    maxWidth: 40,
                    flex: '1 1 auto', // Make text fields flexible on small screens
                    minWidth: '70px',
                    backgroundColor: '#fff',border: 'none', 
                    borderRadius: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none', 
                      },
                    },
                  }}
                  size="small"
                />
              ))}
            </Box>
            </Box>

            {/* Change Button */}
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: '600',
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                borderRadius: 3,
                px: 3,
                py: 1.3,
                '&:hover': { backgroundColor: 'black', color: 'white', boxShadow: 'none' },
              }}
            >
              Change Birthday
            </Button>
          </Box>
        </Box>
        {/* Organization */}


        <Box sx={{ backgroundColor: '#F5F5F5', borderRadius: 3, p: { xs: 2, sm: 4 }, mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Column on mobile, row on tablet/desktop
              gap: 2,
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex',flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>Organization</Typography>
                <Select
                value={organization}
                onChange={handleOrganizationChange}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  '& .MuiSelect-select': {
                    py: 1,
                    px: 2,
                    border: 'none',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  minWidth: 120,
                }}
              >
                <MenuItem value="google">
                   <Box component="img" src="/assets/images/google.svg" alt="google" />
                </MenuItem>
              </Select>
            </Box>

            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: '600',
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                borderRadius: 3,
                px: 3,
                py: 1.3,
                '&:hover': { backgroundColor: 'black', color: 'white', boxShadow: 'none' },
              }}
            >
              Account Connected
            </Button>
          </Box>
        </Box>


        

        {/* Language & Delete All Chat Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stacked on xs, row on md and up
            gap: 3, // Space between elements
          }}
        >
          {/* Language */}
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              borderRadius: 3,
              p: { xs: 2, sm: 3, md: 4 }, // Padding adjustments based on screen size
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Language
            </Typography>
            <Select
              value={language}
              onChange={handleChange}
              sx={{
                borderRadius: 2,
                backgroundColor: '#D0DBE0',
                '& .MuiSelect-select': {
                  py: 1,
                  px: 2,
                  border: 'none',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none', 
                },
                minWidth: 120,
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </Box>

          {/* Delete All Chat */}
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              borderRadius: 3,
              p: { xs: 2, sm: 3, md: 4 }, // Padding adjustments based on screen size
              flex: 1,
              display: 'flex',
              gap: 2,
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Delete All Chat
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: '500',
                backgroundColor: '#F0132D',
                color: 'white',
                boxShadow: 'none',
                px: 3,
                py: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#c81027',
                },
              }}
            >
              Delete All
            </Button>
          </Box>
        </Box>
      
      
        
      </Paper>
    </Box>
  );
};

export default AdvanceGeneralSettings;
