import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes';
import './i18n';
import './App.css';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show loader on every route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : <AppRoutes />;
};

export default App;
