import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  InputBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TabsMessage from './TabsMessage';
import axios from 'axios';
import ChatTools from './ChatTools';


type UserMessage = {
  text: string;
  type: 'user';
};

type SystemMessage = {
  type: 'system';
  answer: string;
};
type Message = UserMessage | SystemMessage;

const HelpInputBox = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');


  const chatRef = useRef<HTMLDivElement | null>(null);


  const handleSendMessage = async () => {
    
    if (inputValue.trim() === '') return;
    const userMessage: UserMessage = { text: inputValue, type: 'user' };
    const loadingMessage: SystemMessage = { type: 'system', answer: 'Thinking...' };
    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    const userInput = inputValue;
    setInputValue('');
  
    try {
      const res = await axios.get(`/api/chatbot?question=${encodeURIComponent(userInput)}`);
      const systemMessage = res.data.message;
  
      animateSystemResponse(systemMessage);
    } catch (err) {
      animateSystemResponse('Something went wrong. Please try again later.');
    }
  };
  
  const animateSystemResponse = (fullText: string) => {
    let index = 0;
  
    const interval = setInterval(() => {
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage.type !== 'system') return prev;
  
        const updatedLastMessage = {
          ...lastMessage,
          answer: fullText.slice(0, index + 1),
        };
  
        return [...prev.slice(0, -1), updatedLastMessage];
      });
  
      index++;
  
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 15); 
  };
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedMessage('');
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box display="flex" flexDirection="column"  overflow="auto" p={2}>

      <Box ref={chatRef} className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-track-gray-200"
       sx={{ maxHeight: {xs: '66dvh', sm: '63dvh', md:'57dvh'}, overflowY: 'auto', p: 2, boxShadow: 0 }}>
        
      <Box mb={2}>
        <Typography variant="h5" fontWeight="bold">
          How may I help you?
        </Typography>
      </Box>
        {messages.map((msg, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start', mb: 1 }}>
            {msg.type === 'user' ? (
              <Paper
              sx={{
                p: 2,
                mt: 2,
                boxShadow: 0,
                backgroundColor: '#E4EBEE',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 0,
              }}
            >
              <Typography>{msg.text}</Typography>
            </Paper>            
            ) : (
              <TabsMessage answer={msg.answer} />
            )}
          </Box>
        ))}
      </Box>

      {/* Input Section */}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'white',
          boxShadow: '0 8px 10px rgba(180, 182, 182, 0.35)',
          borderRadius: 10,
          p: {xs: 2, sm: 3},
        }}
      >
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 8,
            px: 2,
            py: 1,
            backgroundColor: '#F2F6F8', 
            color: '#333',   
          }}
        >
          <InputBase
            sx={{ flex: 1, ml: 1 }}
            placeholder="Which countries improved the most in the EQx rank between 2022 and 2024?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <IconButton
          size="small"
          sx={{
            p: 1.3,
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: '#333',
              color: '#06CABE',
            },
          }}
          onClick={handleSendMessage}
        >
          <SendIcon
            sx={{
              width: '18px',
              height: '18px',
              transform: 'rotate(-45deg)',
            }}
          />
        </IconButton>


        </Paper>

        <ChatTools />

      </Box>

      {/* Popup Dialog */}
      <Dialog open={popupOpen} onClose={handleClosePopup} maxWidth="sm" fullWidth>
        <DialogTitle>Full Message</DialogTitle>
        <DialogContent dividers>
          <Typography>{selectedMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HelpInputBox;
