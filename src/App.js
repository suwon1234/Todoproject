import logo from './logo.svg';
import './App.css';
import React from 'react';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

function App() {
  return (
   <>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <RouterProvider router={router}/>
    </ThemeProvider>
   
   
   </>
  );
}

export default App;
