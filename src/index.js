import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import Display from './Display';
import Student from './components/student';
import Collage from './components/collage';
import Courses from './components/courses';
import { Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  typography: {
    palette: {
      primary: {
        main: '#3f51b5'
      },
      secondary: {
        main: '#f44336'
      }
  },
},
});
root.render(
  
    <>
    {/* <App />
    <Greeter />
    <LikeButton />
    <Display /> */}
    <ThemeProvider theme={theme}>
    <Typography variant='h4' color='#3f51b5' fontFamily='cursive'>
    <Student name="Rick Rude" number="11111" enrolled="2" />
    <Student name="Shawn Michaels" number="22222" enrolled="1" />
    <Student name="Bert Hart" number="33333" enrolled="3" />
    </Typography>
    </ThemeProvider>
    
    <Typography variant='h4' color='#2196f3' fontFamily='cursive'>
    <Collage name="George Brown" location="Casa Loma" />
    </Typography>
    </>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
