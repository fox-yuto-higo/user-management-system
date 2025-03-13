import React from "react";
import { Card, CardContent, Typography, CardActions, Avatar, Box} from "@mui/material";

interface CustomCardProps {
    backgroundColor: string;
    title: string;
    description: string;
    actions?: React.ReactNode;
    imageUrl?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
    backgroundColor = "white",
    title,
    description,
    actions,
    imageUrl,
}) => {
    return (
        <Card sx={{ minWidth: 275, mb: 2, backgroundColor}}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                    {imageUrl && (
                        <Avatar alt={title} src={imageUrl} sx={{ mr:2}}/>
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
        </Card>
    );
};
export default CustomCard;