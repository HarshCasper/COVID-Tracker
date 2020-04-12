import React, { useEffect, useState } from 'react';
import { Line, HorizontalBar } from 'react-chartjs-2';
import {fetchDailyData} from './../../api'
import styles from './Chart.module.css';

const Chart = ({dataset,country}) => {
    const [dailyData,setDailyData] = useState({});
    useEffect(()=>{
        async function loadData() {
            const data = await fetchDailyData();
            setDailyData(data);
        }
        loadData();
      
    },[]);

    const barChart = (

        dataset.confirmed ? 
            <HorizontalBar
              data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                  {
                    label: 'People',
                    backgroundColor: ['rgba(164, 17, 184, 0.5)', 'rgba(39, 145, 13, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [dataset.confirmed.value, dataset.recovered.value, dataset.deaths.value],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
              }}
            />
        :null
    )

    const lineChart = (
        dailyData[0] ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#a411b880',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: '#ff000080',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );

    return (
        <div className={styles.container}>
            {country!=='Global' ? barChart : lineChart}
        </div>
        
       
       
    );
}

export default Chart;