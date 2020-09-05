import React from 'react'
import { useSelector } from 'react-redux';
import { Line, Bar } from 'react-chartjs-2';

import  Styles from './Chart.module.css';
import { selectData, selectDailyData, selectCountry } from '../covidSlice';

const Chart: React.FC = () => {
    const data = useSelector(selectData)
    const dailyData = useSelector(selectDailyData)
    const country = useSelector(selectCountry)

    const barChart = data && (
        <Bar
        data={{
            labels: ["Infected","Recovered","Deaths"],
            datasets: [
                {
                    label: "People",
                    backgroundColor: [
                        "rgba(0, 0, 255, 0.5)",
                        "#0080080",
                        "rgba(255, 0, 0, 0.5)"
                    ],
                    data: [
                        data.confirmed.value,
                        data.recovered.value,
                        data.deaths.value,
                    ]
                }
            ]
        }}
        options={{
            legend: { display: false },
            title: { display: true, text: `Latest status in ${country}` },
        }}
        />
    )

    const LineChart = dailyData && (
        <Line
        data={{
            labels: dailyData.map(({ reportDate }) => reportDate),
            datasets: [
                {
                    data: dailyData.map((data) => data.confirmed.total),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true,
                },
                {
                    data: dailyData.map((data) => data.deaths.total),
                    label: "Deaths",
                    borderColor: "#ff3370",
                    fill: true,
                }
            ]
        }}
        />
    )

    return (
        <div className={Styles.container}>
            { country.length ? barChart : LineChart }
        </div>
    )
}

export default Chart
