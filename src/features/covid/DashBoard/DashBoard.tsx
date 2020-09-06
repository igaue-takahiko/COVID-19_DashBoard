import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid
} from '@material-ui/core'

import Styles from './DashBoard.module.css'
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from '../covidSlice'
import SwitchCountry from '../SwitchCountry/SwitchCountry'
import Chart from '../Chart/Chart'
import PieChart from '../PieChart/PieChart'
import Cards from '../Cards/Cards'

const useStyles = makeStyles(() => ({
    title: { flexGrow: 1 },
    content: { marginTop: 85 },
}))

const DashBoard: React.FC = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const data = useSelector(selectData)

    useEffect(() => {
        dispatch(fetchAsyncGet())
        dispatch(fetchAsyncGetDaily())
    },[dispatch])
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        COVID-19 Live Dashboard
                    </Typography>
                    {data && (
                        <Typography variant="body1">
                            {new Date(data.lastUpdate).toDateString()}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
            <Container className={classes.content}>
                <div className={Styles.container}>
                    <SwitchCountry />
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Chart />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <PieChart />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Cards />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default DashBoard
