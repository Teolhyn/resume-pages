import '@/index.css';
import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <React.StrictMode>
      <Home />
      <footer className="p-4 text-center text-sm text-white bg-white dark:bg-black">
        © {new Date().getFullYear()} Hynnä Consulting Oy.
      </footer>
    </React.StrictMode>
  );
};

export default App;
