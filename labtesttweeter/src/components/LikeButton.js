import React from "react";
import { Typography, Button} from '@mui/material';
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

class LikeButton  extends React.Component  {
    // initialize!
    constructor () {
        super()  // base() ===> parent()

        this.state = {
            count: 0
        }

        //this.bind.handleIncrement = this.handleIncrement
    }

    handleIncrement ()  {
        // modify not directly ====> this.setState()
        this.setState({
            count: this.state.count + 1
        })

        console.log(`clicked....`)
       
    }
  

    render() {
        return <>
        <ThemeProvider theme={theme}>
        <Typography variant='h6' color='#03a9f4' fontFamily='cursive'>
            <Button className="like-button" variant="contained" size="small" onClick={ () =>  this.handleIncrement()  } >Like!</Button>
             Likes: {this.state.count }
             </Typography>
             </ThemeProvider>
        </>
    }
}


export default LikeButton;