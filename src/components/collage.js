import React from 'react';

class Collage extends React.Component {
    state = {  } 
    render() { 
        return <p>Collage <b>{this.props.name}</b> with address <b>{this.props.location}</b></p>;
    }
}
 
export default Collage;