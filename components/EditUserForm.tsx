"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useId, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    TextField,
    Button,
    Box,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";

// 必要に応じて利用する
interface EditUserFormInputs {
    name: string;
    email: string;
    role: string;
}

interface EditUserFormProps {
    userId: number;
    onSuccess?: () => void;
    onError?: (error: any) => void;
    disabled?: boolean;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({
    userId,
    onSuccess,
    onError,
    disabled = false
}) => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<EditUserFormInputs>();

    const [user, setUser] = useState<EditUserFormInputs>({ name: "", email: "", role: "" })

    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<boolean>(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchUser:User | null = await fetchUserById(userId);
                if(fetchUser){
                setValue("name", fetchUser.name)
                setValue("email", fetchUser.email)
                setValue("role", fetchUser.role)
                } else{
                    setError("ユーザーが見つかりません")
                }
            } catch (err) {
                setError("ユーザー情報の取得に失敗しました。" + err);
                setSuccess(false);
                if (onError) onError(err);
            }
        };

        fetchUser();
    }, [userId]);

    const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
        try {
          await updateUser(userId, { name: data.name, email: data.email, role: data.role });
          setSuccess(true);
          setError(null);
          if (onSuccess) onSuccess();
        } catch (err) {
          setError("ユーザーの更新に失敗しました。" + err);
          setSuccess(false);
          if (onError) onError(err);
        }
      };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                ユーザー情報編集
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">ユーザー情報を更新しました。</Alert>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    //label="名前"
                    {...register("name", { required: "名前は必須です。" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    //label="メールアドレス"
                    type="email"
                    {...register("email", { required: "メールアドレスは必須です。" })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    //label="役割"
                    {...register("role", { required: "役割は必須です。" })}
                    error={!!errors.role}
                    helperText={errors.role?.message}
                    margin="normal"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={ disabled}
                >
                    更新
                </Button>
            </form>
        </Box>
    );
};

export default EditUserForm;