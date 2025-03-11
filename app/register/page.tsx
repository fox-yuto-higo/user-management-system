// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する




const RegisterPage: React.FC = () => {

    const router = useRouter();

    const handleRegisterSuccess = () => {
        router.push('/users'); // ユーザー一覧ページへ遷移
    };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      新規登録
    </Typography>
    <RegisterForm onSuccess={handleRegisterSuccess}/>
  </Box>
  );
};
export default RegisterPage;