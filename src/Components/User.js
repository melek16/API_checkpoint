import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    return (
        <div className="UserCard">
           <p style={{padding:'2%'}}><span>User: </span>{user.name}</p> 
           <Link to={{pathname:`/user/${user.id}`,state:{...user}}}><button>See more info</button></Link>
        </div>
    )
}

export default User
