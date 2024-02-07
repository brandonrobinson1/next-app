import React from 'react'
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;

}
const UserTable = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json();

  return (
    <table className='table table-bordered'>
  <thead>
    <tr>
        <td><Link href='/users?sortOrder=name'>Name</Link></td>
        <td><Link href='/users?sortOrder=email'>Email</Link></td>
    </tr>
    
    </thead> 
    <tbody>
    {users.map((user)=><tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
         </tr>)}

    </tbody>
    </table>
  )
}

export default UserTable
