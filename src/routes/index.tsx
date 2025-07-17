import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ChatbotHome from '../pages/ChatBot';
import PageNotFound from '../pages/PageNotFound';
import Settings from '../pages/Settings';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Settings" element={<Settings />} />
    <Route path="/" element={<ChatbotHome/>} />
    <Route path="/PageNotFound" element={<PageNotFound />} />
  </Routes>
);

export default AppRoutes;
