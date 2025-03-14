"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm"
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useRouter } from 'next/navigation';


const EditUserPage: React.FC = () => {

  const router = useRouter();
  const id = useParams().id;

  const handleEditSuccess = () => {
    router.push('/users');
  };


  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
  }

  return (
    //   <Box sx={{ mt: 4 }}>
    //     <Typography variant="h4" gutterBottom>
    //       ユーザー編集
    //     </Typography>
    //     <EditUserForm userId={Number(id)} onSuccess={handleEditSuccess}/>
    //   </Box>
    // );
    <Box
      sx={{
        mt: 6,
        backgroundImage: 'url(https://www.pakutaso.com/shared/img/thumb/HIGA62_notepen_TP_V.jpg)', // 画像URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // 画面全体に背景を表示
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
        ユーザー編集
      </Typography>
      <EditUserForm userId={Number(id)} onSuccess={handleEditSuccess} />
    </Box>
  )
};

export default EditUserPage