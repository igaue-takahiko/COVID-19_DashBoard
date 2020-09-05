import React from 'react'
import { useSelector } from 'react-redux';
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import { GiHastyGrave } from 'react-icons/gi'
import { MdLocalHospital } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'

import { selectData } from '../covidSlice';
import  Styles from "./Cards.module.css"

const Cards: React.FC = () => {
    const data = useSelector(selectData)
    return (
        <div className={Styles.container}>
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} md={3} component={Card} className={Styles.infected}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <MdLocalHospital /> Infected persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={data.confirmed.value}
                            duration={1.5}
                            separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={Styles.recovered}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <AiFillLike /> Recovered persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={data.recovered.value}
                            duration={1.5}
                            separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={Styles.deaths}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <GiHastyGrave /> Dead persons
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={data.deaths.value}
                            duration={1.5}
                            separator=","
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
