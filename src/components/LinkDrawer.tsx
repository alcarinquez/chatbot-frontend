
import { Divider, Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface LinkDrawerProps {
  open: boolean;
  onClose: () => void;
}

const LinkDrawer = ({ open, onClose }: LinkDrawerProps) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 550, height: '100vh' },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Typography variant="h6">Linked Info</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider/>

        <Typography variant="body1" mt={2}>
          You can place any content here: links, previews, user info, etc.
        </Typography>
      </Box>
    </Drawer>
  );
};

export default LinkDrawer;
