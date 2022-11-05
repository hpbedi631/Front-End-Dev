import axios from 'axios';
import React from 'react';
class StudentName extends React.Component {
    state = { name: '' 
}
handleChange = Event => {this.setState({name:Event.target.value})}
handleSubmit = Event => {
    Event.preventDefault();
    const userName= {name:this.state.name};
    axios.post('https://jsonplaceholder.typicode.com/users', userName)
    .then(function(Response){
        console.log(Response);
        this.props.addUser(userName);
    })
}
    render() { 
        return (       
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:
                    <input type='text' name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit" onClick={this.handleChange}>Add</button>
            </form>
        </div>
    );
    }
}
 
export default StudentName;