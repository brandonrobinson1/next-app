import React, {Suspense} from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
  searchParams:{sortOrder:string}
}
async function UsersPage({searchParams: {sortOrder}}:Props) {
  console.log(sortOrder)
  return (<>
    <h1>Users</h1>
    <Link className='btn' href='users/new'>New User</Link>
    <Suspense fallback={<p>Loading...</p>}>
    <UserTable sortOrder={sortOrder} />
</Suspense>
  </>
  
  )
}

export default UsersPage  
