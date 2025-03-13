import { useState } from "react";
import { hideUser } from "../utils/api";
import CustomButton from "@/components/parts/CustomButton";
import CustomModal from "./parts/CustomModal";

interface DeleteUserButtonProps {
    userId: number;
    onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
    const [error, setError] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleHideUser = async () => {
        setError(null);
            try {
                await hideUser(userId);
                onDelete(userId);
            } catch (err) {
                setError("ユーザーの削除に失敗しました");
            }
    };

    return (
        <div>
            <CustomButton onClick={() => setModalOpen(true)} size="small" variantType="danger">
                ユーザーを削除
            </CustomButton>
            <CustomModal
                open={modalOpen}
                title="確認"
                content="本当にこのユーザーを削除しますか？"
                onClose={() => setModalOpen(false)}
                onConfirm={handleHideUser}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )

}

export default DeleteUserButton;