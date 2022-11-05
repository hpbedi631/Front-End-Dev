import axios from 'axios';
import React from 'react';
class DeleteStudentName extends React.Component {
    
handleSubmit = (id,Event) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
    .then((Response)=>{
        console.log(Response);
        this.props.deleteUsers(this.props.id);
    })
}
    render() { 
        return (
        
        <div>
                <button type="submit" onClick={this.handleSubmit}>delete</button>
        </div>
    );
    }
}
 
export default DeleteStudentName;