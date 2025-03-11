import React from "react";
import UserCard from "./UserCard";
import { Box, Typography } from '@mui/material'

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    deleted: boolean;
}
interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return(
        <Box>
            <Typography variant="h4" gutterBottom>
                ユーザー一覧
            </Typography>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </Box>
    )
}
export default UserList