"use client"; 

import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { User } from "../types/User";
import {Email, Person } from "@mui/icons-material"; 
import CatchingPokemonSharpIcon from '@mui/icons-material/CatchingPokemonSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';

interface UserDetailsProps {
    user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                ユーザー詳細
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <CatchingPokemonSharpIcon sx={{ mr: 1 }} /> <strong>ID:</strong> {user.id}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Person sx={{ mr: 1 }} /> <strong>名前:</strong> {user.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email sx={{ mr: 1 }} /> <strong>メール:</strong> {user.email}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <WorkSharpIcon sx={{ mr: 1 }} /> <strong>役職:</strong> {user.role}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </Box>
);

export default UserDetails;