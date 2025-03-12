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


    




    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                ユーザー詳細
            </Typography>

            
                <>
                    <Typography variant="body1" gutterBottom>
                        <strong>ID:</strong> {user.id}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>名前:</strong> {user.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>メール:</strong> {user.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <strong>役職:</strong> {user.role}
                    </Typography>
                </>
        </Box>
    );
};

export default UserDetails