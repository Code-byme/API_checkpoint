import React, { useEffect } from 'react'
import axios from 'axios';

function UserList() {
    const [list,  setList] = React.useState([]);
    
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setList(response.data);
    })
    .catch(error => { console.log(error);
    });
}, [])
    return (
    <div>
        <h1>User List</h1>
        <ul>
            {list.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>

    </div>
  )
}

export default UserList