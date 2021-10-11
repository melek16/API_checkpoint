import React from 'react'
import { useLocation} from 'react-router'

const UserDetails = () => {
    const location=useLocation()
    const user=location.state

    return (
        <div className='UserDetails'>
            <p><span>Name:</span>{user.name}</p>
            <p><span>Username:</span>{user.username}</p>
            <p><span>Email:</span>{user.email}</p>
            <p><span>ID:</span>{user.id}</p>
            <p><span>Street:</span>{user.address.street}</p>
        </div>
    )
}

export default UserDetails
