"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from "react";
import UserDitals from "../../../../components/UserDetails"
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useRouter } from 'next/navigation';
import { User } from "../../../../types/User"
import { fetchUserById } from "../../../../utils/api";

const UserDetailsPage: React.FC = () => {

    const router = useRouter();
    const id = useParams().id;

    // ユーザーIDが取得できていない場合はnullを返す
    if (!id || Array.isArray(id)) {
        return <Typography>ユーザーIDが無効です。</Typography>;
    }

    const [error, setError] = React.useState<string | null>(null);
    const [fetchedUser, setFetchedUser] = useState<User>();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchUser: User | null = await fetchUserById(Number(id));
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
    }, [id]);

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                ユーザー編集
            </Typography>
            {fetchedUser && (
                <UserDitals user={fetchedUser} />
            )
            }
        </Box>
    );
};

export default UserDetailsPage
