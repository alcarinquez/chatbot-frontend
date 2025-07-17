import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/chatbot', async (req, res) => {
  const question = req.query.question;
  if (!question) {
    return res.status(400).json({ message: 'Missing question query parameter' });
  }

  try {
    const response = await axios.get(
      `http://20.246.242.98:5000/GetChatbotResponse?user_input_question=${encodeURIComponent(question)}`
    );
    res.json({ message: response.data.message });
  } catch (error) {
    console.error('Error fetching from chatbot API:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🧠 Chatbot API running at http://localhost:${PORT}`);
});
