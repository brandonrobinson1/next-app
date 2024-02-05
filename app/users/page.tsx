import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;

}

async function UsersPage() {
const res = await fetch('https://jsonplaceholder.typicode.com/users')
const users: User[] = await res.json();



  return (<><h1>Users</h1>

  <table className='table table-bordered'>
  <thead>
    <tr>
        <td>Name</td>
        <td>Email</td>
    </tr>
    
    </thead> 
    <tbody>
    {users.map((user)=><tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        </tr>)}

    </tbody>
    </table>

  </>
  
  )
}

export default UsersPage  
