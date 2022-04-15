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
    textTransform: "uppercase"
}));

export default function InfoPanel() {

    const [globalData, setGlobalData] = React.useState(() => { })

    React.useEffect(() => {
        async function getData() {
            const response = await fetch("https://covid19.mathdro.id/api")

            let { confirmed, recovered, deaths, } = await response.json()
            setGlobalData(() => ({
                confirmed,
                recovered,
                deaths,
            }))
        }
        getData()
    }, [])

    if (!globalData) return <>Loading...</>

    return (
        <Box className={styles.root} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {
                    Object.keys(globalData).map((key, ind) => {
                        console.log(key);
                        return (
                            <Grid item xs={12} md={4} key={ind}>
                                <Item elevation={3}>
                                    <h3 className={styles.title}>{key}</h3>
                                    <h3>{globalData[key].value}</h3>
                                </Item>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}
