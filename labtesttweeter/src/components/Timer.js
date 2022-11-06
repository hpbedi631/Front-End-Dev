import React from 'react';
import Moment from 'react-moment';
import { Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
class Timer extends React.Component{
    render() {
        const calenderstrings = {Hour:"00", Minutes:"00", Seconds:"00"};
        return <>
        <ThemeProvider theme={theme}>
        <Typography variant='h5' color='#ff5722' fontFamily='cursive'> 
        <time><Moment calendar={calenderstrings} format="hh:mm:ss"/></time>
        </Typography>
        </ThemeProvider>
        </>
    }

}
 
export default Timer;