import { useState  } from 'react';
import { Button, Box, Tabs, Typography, Paper,  IconButton, Tooltip } from '@mui/material';
import LinkDrawer from './LinkDrawer';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const TabsMessage = ({ answer }: { answer: string }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  const renderAnswerWithBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };
  

  return (
    <Paper sx={{ borderRadius: 5, borderBottomLeftRadius: 0,
     p: 3, backgroundColor: '#fff', width: '100%', boxShadow: 0 }}>
      <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F2F6F8',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            px: 2,
            py: 1,
        }}
        >
        <Tabs
            value={activeTab}
            onChange={handleChange}
            indicatorColor="primary"
        >
            <Box sx={{ display: 'flex', gap: 1, backgroundColor: '#F2F6F8', borderRadius: 5, p: 1 }}>
            <Button
                variant="contained"
                onClick={() => setActiveTab(0)}
                    sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        backgroundColor: activeTab === 0 ? 'black' : 'white',
                        color: activeTab === 0 ? 'white' : 'black',
                        boxShadow: activeTab === 0 ? 2 : 0,
                        border: activeTab === 0 ? 'none' : '1px solid #ccc',
                    }}
                    >
                    Answer
                </Button>

            </Box>
        </Tabs>

        <Box sx={{ display: 'none'}}>
            {activeTab === 0 && (
                <Button
                variant="contained"
                sx={{ textTransform: 'none', borderRadius: 999, backgroundColor: '#fff', color: 'black' }}
                onClick={() => setDrawerOpen(true)}
                >
                30 Tasks
                </Button>
            )}
            <Button
                variant="contained"
                sx={{ textTransform: 'none', mx: 1, borderRadius: 999, backgroundColor: '#fff', color: 'black' }}
                >
                Share
            </Button>
        </Box>

        
        </Box>

        <LinkDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />



      {activeTab === 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
                {renderAnswerWithBreaks(answer)}
            </Typography>
        </Box>
      )}

      
      
        <Box sx={{  gap: 1, mt: 6 }}>
        

        <Tooltip title="Copy">
            <IconButton
                onClick={() => {
                navigator.clipboard.writeText(answer);
                }}
                sx={{
                borderRadius: '50%',
                backgroundColor: '#E7E7E7',
                color: 'black',
                '&:hover': { backgroundColor: '#d1c4e9' },
                }}
            >
                <ContentCopyIcon />
            </IconButton>
            </Tooltip>


        
        </Box>


    </Paper>
  );
};

export default TabsMessage;
