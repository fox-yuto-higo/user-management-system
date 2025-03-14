'use client'; 

import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const RegisterPage: React.FC = () => {

    const router = useRouter();

    const handleRegisterSuccess = () => {
        router.push('/users'); 
    };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2 , padding: 3, backgroundColor: "whitesmoke"}}>
    <Typography variant="h4" component="h1" gutterBottom>
      新規登録
    </Typography>
    <RegisterForm onSuccess={handleRegisterSuccess}/>
  </Box>
  );
};
export default RegisterPage;