import '@/index.css';
import Header from "./components/header";
import Footer from './components/footer';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <PageWrapper />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
    ],
  },
], {
  basename: '/resume-pages',
});

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
