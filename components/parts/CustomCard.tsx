import React from "react";
import { Card, CardContent, Typography, CardActions, Avatar, Box} from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system"; 

interface CustomCardProps {
    backgroundColor: string;
    title: string;
    description: string;
    actions?: React.ReactNode;
    imageUrl?: string;
}

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)`
  min-width: 275px;
  animation: ${slideIn} 1.5s ease-out;
`;


const CustomCard: React.FC<CustomCardProps> = ({
    backgroundColor = "white",
    title,
    description,
    actions,
    imageUrl,
}) => {
    return (
        <AnimatedCard sx={{ backgroundColor }}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    {imageUrl && (
                        <Avatar alt={title} src={imageUrl} sx={{ mr: 2 }} />
                    )}
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            {actions && <CardActions>{actions}</CardActions>}
        </AnimatedCard>
    );
};

export default CustomCard;