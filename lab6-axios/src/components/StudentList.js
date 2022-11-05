import React from 'react';
import axios from 'axios';
import StudentName from './AddStudent';
import DeleteStudentName from './DeleteStudent';
class StudentList extends React.Component {
    state = { users: [] };
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data;
            this.setState({users});
        });
    }
    addUsers = userData => {
        let data = {name:userData.state.name, id:userData.state.id};
        this.setState({users:[...this.state.users,data]});
    };

    deleteUsers = usersId => {
        const deleteUserId = this.state.users.filter(item =>item.id !== usersId);
        this.setState({users: deleteUserId});
    }

    render() { 
        return (
            <>
            <StudentName adduser = {this.addUsers} />
            <ul>
                {this.state.users.map(user => {
                    return <li key={user.id}>
                        {user.name}
                        <DeleteStudentName id={user.id} deleteUsers={this.deleteUsers}/>
                    </li>
                })}
            </ul>
            </>
        );
    }
}
 
export default StudentList;