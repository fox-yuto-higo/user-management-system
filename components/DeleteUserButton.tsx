import { useState } from "react";
import { hideUser } from "../utils/api"; // hideUser関数のインポート
import { Button } from "@mui/material";
import CustomButton from "@/components/parts/CustomButton";

interface DeleteUserButtonProps {
    userId: number;
    onDelete: (userId: number) => void; //再レンダリング用
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
    const [error, setError] = useState<string | null>(null);

    const handleHideUser = async () => {
        setError(null);
        if (confirm("本当にこのユーザーを削除しますか？")) {
            try {
                await hideUser(userId);
                onDelete(userId);
            } catch (err) {
                setError("ユーザーの削除に失敗しました");
            }
        }
    };

    return (
        <div>
            <CustomButton onClick={handleHideUser} size="small" variantType="danger">
                ユーザーを削除
            </CustomButton>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )

}

export default DeleteUserButton;