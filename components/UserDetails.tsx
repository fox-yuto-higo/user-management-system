"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";
import { fetchUserById} from "../utils/api";
import { User } from "../types/User";
import { useRouter } from "next/navigation";


// 必要に応じて利用する
interface UserDetailsProps {
    user: User;
}




const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {


    const [error, setError] = React.useState<string | null>(null);
    const [fetchedUser, setFetchedUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchUser: User | null = await fetchUserById(user.id);
                if (fetchUser) {
                    setFetchedUser(fetchUser);
                } else {
                    setError("ユーザーが見つかりません")
                }
            } catch (err) {
                setError("ユーザー情報の取得に失敗しました。" + err);
            }
        };

        fetchUser();
    }, [user.id]);




    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                ユーザー詳細
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}
            {!fetchedUser ? (
                <CircularProgress />
            ) : (
                <>
                    <Typography variant="body1" gutterBottom>
                        <strong>ID:</strong> {fetchedUser.id}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>名前:</strong> {fetchedUser.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>メール:</strong> {fetchedUser.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>役職:</strong> {fetchedUser.role}
                    </Typography>
                </>
            )}
        </Box>
    );
};
