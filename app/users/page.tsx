import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams:{sortOrder:string}
}
async function UsersPage({searchParams: {sortOrder}}:Props) {
  console.log(sortOrder)
  return (<>
    <h1>Users</h1>
    <UserTable sortOrder={sortOrder} />

  </>
  
  )
}

export default UsersPage  
