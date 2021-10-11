import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([])
    useEffect(() => {
        let getUserList=async ()=>{
            let res=await axios.get('https://jsonplaceholder.typicode.com/users')
            setListOfUsers(res.data)
        }
        getUserList()
    }
    , [])
    return (
        <div id="UserList">
           { listOfUsers.map((c,i)=><User user={c} key={i}/>)}
        </div>
    )
}

export default UserList
