import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

import styles from './ChartComponent.module.css';

const ChartComponent = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  }, [])

  const lineChart = (
    dailyData.length
      ? (<Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true,
            }, {
              data: dailyData.map((data) => data.recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true,
            },
          ],
        }}
      />)
      : null
  )

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default ChartComponent