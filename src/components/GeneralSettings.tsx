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
  IconButton
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const GeneralSettings = () => {
  const [language, setLanguage] = useState('en');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ px: { xs: 0, sm: 4, md: 8 }, py: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        px={2}
        display="flex"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          maxWidth: '960px',
          mx: 'auto',
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 16, mr: 1 }} />
        Back
      </Typography>

      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          boxShadow: 0,
          p: { xs: 2, sm: 4 },
          mb: 3,
          maxWidth: '960px',
          mx: 'auto',
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          General Setting
        </Typography>

        <Typography
          variant="body2"
          sx={{ maxWidth: '768px', mb: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>

        <Divider sx={{ maxWidth: '768px', borderColor: '#D1D5DB', mb: 3 }} />

        {/* Profile Info */}
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
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Avatar alt="User Profile" src="/assets/images/profile.jpg" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @johndoe
                </Typography>
              </Box>
              <IconButton
                color="primary"
                sx={{
                  borderRadius: '50%',        // Circular shape
                  width: 40,
                  height: 40,
                  backgroundColor: '#EAEDF8',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#D0DBE0',
                  },
                }}
              >
                <EditIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: '600',
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                px: 3,
                py: 1,
                borderRadius: 2,
                mt: { xs: 2, sm: 0 },
                '&:hover': { backgroundColor: '#f0f0f0', boxShadow: 'none' },
              }}
            >
              Change Image
            </Button>
          </Box>
        </Box>

        {/* Email Section */}
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
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Email
              </Typography>
              <Typography
                variant="body2"
                fontWeight={500}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  whiteSpace: 'nowrap',
                }}
              >
                Placeholder123@gmail.com
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: '600',
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                px: 3,
                py: 1,
                borderRadius: 2,
                mt: { xs: 2, sm: 0 },
                '&:hover': { backgroundColor: '#f0f0f0', boxShadow: 'none' },
              }}
            >
              Change Email
            </Button>
          </Box>
        </Box>

        {/* Language & Delete All Chat Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          {/* Language */}
          <Box
            sx={{
              backgroundColor: '#F5F5F5',
              borderRadius: 3,
              p: { xs: 2, sm: 4 },
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
              p: { xs: 2, sm: 4 },
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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

export default GeneralSettings;
