import { useState } from "react";
import { hideUser } from "../utils/api"; // hideUser関数のインポート
import { Button } from "@mui/material";


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
            <Button onClick={handleHideUser} size="small" color="error">
                ユーザーを削除
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )

}

export default DeleteUserButton;