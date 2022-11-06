import React from 'react';
import Comment from './Comment';
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
class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',valueArray:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // const input = {value: event.state.value};
    this.setState({
      valueArray: [...this.state.valueArray, this.state.value],
      value: ""
    })
  }


  render() {
    return (
      <>
      <h2>{this.props.status}</h2>
      <form onSubmit={this.handleSubmit}>
        <ThemeProvider theme={theme}>
        <Typography variant='h4' color='#3f51b5' fontFamily='cursive'>
        <label>
          Comment:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {this.state.valueArray.map(commentvalue=>(
          <div>
          <p>
            <Comment value= {commentvalue}/>
          </p>
          </div>
        ))}
        <Button type="submit" variant='outlined' size='medium' value="Submit"> Post </Button>
        </Typography>
        </ThemeProvider>
      </form>
      </>
    );
  }
}
export default TweetContainer; 