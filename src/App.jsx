import React from 'react';
import './App.css';
import { useThemeHook } from './globalComponents/ThemeProvider';

import Navbar from './components/Header';
import Home from './pages/Home';

const App = () => {

  const [theme] = useThemeHook();
  return (
    <>
   
    <main className={theme? 'bg-black':'bg-light-2' } >
      <Navbar />
      <Home />
      

      </main>

      
    </>
  );
};

export default App;