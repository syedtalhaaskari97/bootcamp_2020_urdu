import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "./InfoPanel.module.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function InfoPanel() {
    return (
        <Box className={styles.root} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Item elevation={3}>Grid 1</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item elevation={3}>Grid 2</Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item elevation={3}>Grid 3</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
