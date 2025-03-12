import React, { useState } from "react";
import UserCard from "./UserCard";
import { Box, Typography } from '@mui/material'
import {User} from "../types/User"


interface UserListProps {
    initialUsers: User[];

}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {

    const [users,setUsers] = useState<User[]>(initialUsers);

    const handleDelete = (deleteUserId: number) =>{
       const filterUser = initialUsers.filter(user =>
        user.id != deleteUserId);
       setUsers(filterUser);
    }


    return(
        <Box>
            <Typography variant="h4" gutterBottom>
                ユーザー一覧
            </Typography>
            {users.map(user => (
                <UserCard key={user.id} user={user} onDelete={handleDelete}/>
            ))}
        </Box>
    )
}
export default UserList;