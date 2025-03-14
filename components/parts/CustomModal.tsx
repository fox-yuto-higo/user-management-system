import React from "react";
import { Modal, Box, Typography, Button} from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system"; 

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

interface CustomModalProps {
    open: boolean;
    title: string;
    content: string;
    onClose: () => void;
    onConfirm?: () => void;
}

const fadein = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedModal = styled(Modal)`
  animation: ${fadein} 0.7s ease-out;
  backdrop-filter: blur(5px);
`;

const CustomModal: React.FC<CustomModalProps> = ({
    open,
    title,
    content,
    onClose,
    onConfirm,
}
) => {
  return (
    <AnimatedModal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{content}</Typography>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} sx={{ mr: 2 }}>
            キャンセル
          </Button>
          {onConfirm && (
            <Button variant="contained" color="primary" onClick={onConfirm}>
              確認
            </Button>
          )}
        </Box>
      </Box>
    </AnimatedModal>
  );
};

export default CustomModal;