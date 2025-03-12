"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "../../../../components/EditUserForm"
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useRouter } from 'next/navigation';

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {

  const router = useRouter();
  const id = useParams().id;

  const handleEditSuccess = () => {
      router.push('/users'); // ユーザー一覧ページへ遷移
  };

  // ユーザーIDが取得できていない場合はnullを返す
  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm userId={Number(id)} onSuccess={handleEditSuccess}/>
    </Box>
  );
};

export default EditUserPage