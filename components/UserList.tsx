import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { User } from "../types/User";
import CustomCard from "./parts/CustomCard";
import Link from 'next/link';
import DeleteUserButton from "./DeleteUserButton";


interface UserListProps {
    initialUsers: User[];
}

const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
    const [users, setUsers] = useState<User[]>(initialUsers);

    const handleDelete = (deleteUserId: number) => {
        const filterUser = users.filter(user => user.id !== deleteUserId);
        setUsers(filterUser);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                ユーザー一覧
            </Typography>
            {users.map(user => (
                <Box key={user.id} sx={{ mb: 2 }}>
                    <CustomCard
                        backgroundColor="snow"
                        imageUrl={"https://kotonohaworks.com/free-icons/wp-content/uploads/kkrn_icon_user_2.png"}
                        title={user.name}
                        description={`役割: ${user.role}\nメールアドレス: ${user.email}`}
                        actions={
                            <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
                                <Box>
                                    <Button size="small" variant="contained" sx={{ backgroundColor: "cornflowerblue" }} component={Link} href={`/users/${user.id}/edit`}>
                                        編集
                                    </Button>
                                    <Button size="small" variant="contained" sx={{ backgroundColor: "lightskyblue", ml: 1 }} component={Link} href={`/users/${user.id}/details`}>
                                        ユーザー詳細
                                    </Button>
                                </Box>
                                <DeleteUserButton userId={user.id} onDelete={handleDelete} />
                            </Stack>
                        }
                    />
                </Box>
            ))}
        </Box>
    );
};

export default UserList;