import { useRef, useState } from 'react';
import {
  Box,
  Chip,
  Popper,
  Typography,
  Fade,
  Paper,
  SvgIcon,
} from '@mui/material';

const ChatTools = () => {
  const [dropdownAnchor, setDropdownAnchor] = useState<null | HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number }>({
    Function: 0,
  });
  
  const [settingsChecked, setSettingsChecked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  

  const dropdownData = {
    Function: [
      { label: 'Descriptive', description: 'EQx country performances (basic-level query)' },
      { label: 'Interpretative', description: 'Political economy insight (standard-level query)' },
      { label: 'Prognosis', description: 'Foresight-driven guidance (advanced-level query)' },
    ],
  };

  const handleDropdownClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: string
  ) => {
    if (type === 'Settings') {
      setSettingsChecked(!settingsChecked);
      return;
    }

    if (type === 'Attach') {
      fileInputRef.current?.click();
      return;
    }

    if (activeDropdown === type) {
      setActiveDropdown('');
      setDropdownAnchor(null);
    } else {
      setActiveDropdown(type);
      setDropdownAnchor(e.currentTarget);
    }
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOptions((prev) => ({ ...prev, [activeDropdown]: index }));
    setDropdownAnchor(null);
    setActiveDropdown('');
  };

  const GradientCheckIcon = () => (
    <SvgIcon viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradientColor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#gradientColor)" />
      <path
        fill="white"
        d="M10 15.172l-3.172-3.172-1.414 1.414L10 18l8-8-1.414-1.414z"
      />
    </SvgIcon>
  );

  const LightGrayRadioIcon = () => (
    <SvgIcon viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="#CFCFCF" />
      <path
        fill="white"
        d="M10 15.172l-3.172-3.172-1.414 1.414L10 18l8-8-1.414-1.414z"
      />
    </SvgIcon>
  );

  const selectedFunctionLabel =
    dropdownData.Function[selectedOptions.Function].label;

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      {/* Chips */}
      <Box mt={2} display="flex" gap={1} flexWrap="wrap">
        {/* Function Chip: image + selected text */}
        <Chip
          icon={
            <Box
              component="img"
              src="/assets/images/function.svg"
              alt="Function"
              sx={{
                width: 14,
                filter: activeDropdown === 'Function' ? 'invert(100%) brightness(200%)' : 'none',
              }}
            />
          }
          label={selectedFunctionLabel}
          color={activeDropdown === 'Function' ? 'primary' : 'default'}
          onClick={(e) => handleDropdownClick(e, 'Function')}
          sx={{
            borderRadius: '999px',
            padding: '20px',
            border: 'none',
            fontWeight: 600,
            backgroundColor: activeDropdown === 'Function' ? 'transparent' : '#F2F6F8',
            backgroundImage: activeDropdown === 'Function'
              ? 'linear-gradient(45deg, #06CABE, #11ACD3)'
              : 'none',
            color: activeDropdown === 'Function' ? '#fff' : '#59626D',
            '.MuiChip-label': {
              color: activeDropdown === 'Function' ? '#fff' : 'inherit',
            },
          }}
        />

        {/* Settings Chip: toggle (checked button style) */}
        <Chip
          icon={
            <Box
              component="img"
              src="/assets/images/globe.svg"
              alt="Settings"
              sx={{
                width: 24,
                height: 24,
                filter: settingsChecked ? 'invert(100%) brightness(200%)' : 'none',
              }}
            />
          }
          color={settingsChecked ? 'primary' : 'default'}
          variant={settingsChecked ? 'filled' : 'outlined'}
          onClick={(e) => handleDropdownClick(e, 'Settings')}
          sx={{
            width: 40,
            height: 40,
            border: 'none',
            backgroundColor: settingsChecked ? 'transparent' : '#F2F6F8',
            backgroundImage: settingsChecked
              ? 'linear-gradient(45deg, #06CABE, #11ACD3)'
              : 'none',
            borderRadius: '50%',
            padding: 0,
            '.MuiChip-label': { display: 'none' },
            '.MuiChip-icon': { margin: 0 },
          }}
        />

        {/* Attach Chip: opens file picker */}
        <Chip
          icon={
            <Box
              component="img"
              src="/assets/images/paper-clip.svg"
              alt="Attach"
              sx={{
                width: 22,
                height: 22,
                filter: activeDropdown === 'Attach' ? 'invert(100%) brightness(200%)' : 'none',
              }}
            />
          }
          color="default"
          variant="outlined"
          onClick={(e) => handleDropdownClick(e, 'Attach')}
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#F2F6F8',
            padding: 0,
            '.MuiChip-label': { display: 'none' },
            '.MuiChip-icon': { margin: 0 },
          }}
        />
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              console.log('Selected file:', file);
              // You can handle the selected file here
            }
          }}
        />
      </Box>

      {/* Dropdown */}
      <Popper
        open={Boolean(dropdownAnchor)}
        anchorEl={dropdownAnchor}
        placement="bottom-start"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <Paper
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 3,
                maxWidth: 400,
                boxShadow: '0 8px 20px rgba(180, 182, 182, 0.35)',
                zIndex: 99999,
                border: '1px solid #E0E0E0',
                filter: 'drop-shadow(0px 13px 54px rgba(170, 189, 199, 0.31))',
                background: '#FFFFFF',
              }}
            >
              {dropdownData[activeDropdown as keyof typeof dropdownData]?.map((option: any, index: number) => (
                <Box
                  key={option.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor:
                      selectedOptions[activeDropdown] === index ? '#FFFFFF' : '#F5F5F5',
                    borderRadius: 15,
                    p: 2,
                    mb: 1,
                    cursor: 'pointer',
                    border: '1px solid #F4F4F4',
                    filter: 'drop-shadow(-1.816px 3.564px 49px rgba(0, 0, 0, 0.059))',
                    '&:hover': { backgroundColor: '#FFFFFF' },
                  }}
                  onClick={() => handleOptionSelect(index)}
                >
                  <Box sx={{ mr: 2 }}>
                    {selectedOptions[activeDropdown] === index ? (
                      <GradientCheckIcon />
                    ) : (
                      <LightGrayRadioIcon />
                    )}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{
                        background:
                          selectedOptions[activeDropdown] === index
                            ? 'linear-gradient(to right, #14b8a6, #06b6d4)'
                            : 'none',
                        WebkitBackgroundClip:
                          selectedOptions[activeDropdown] === index ? 'text' : 'unset',
                        WebkitTextFillColor:
                          selectedOptions[activeDropdown] === index ? 'transparent' : 'black',
                        color: selectedOptions[activeDropdown] !== index ? 'black' : undefined,
                      }}
                    >
                      {option.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {option.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default ChatTools;
