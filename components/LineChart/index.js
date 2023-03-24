import { useState, useEffect } from "react"
import styles from './LineChart.module.css'
import { Line } from 'react-chartjs-2'

import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale, 
    PointElement, 
    LineElement,
    Title, 
    Tooltip,
    Legend
);


export default function LineChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Africa", "Asia", "Europe", "Austrailia", "South America"], 
            datasets: [
                {
                    label: "Non-res visitiors entering Canada Sept 2022", 
                    data:  [9910, 74726, 206647, 18887, 16251], 
                    borderColor: 'rgb(159, 160, 255)',
                    backgroundColor: 'rgb(159, 160, 255)'
                    // Africa, Asia, Europe, Austrilia, South America
                },
                
                {
                    label: "Non-res visitiors entering Canada Oct 2022", 
                    data: [10628, 88007, 219679, 28406, 17721], 
                    borderColor: 'rgb(119, 191, 163)', 
                    backgroundColor: 'rgb(119, 191, 163)'
                     // Africa, Asia, Europe, Austrilia, South America

                }, 
                {
                    label: "Non-res visitiors entering Canada Nov 2022", 
                    data: [10525, 103576, 228765, 32830, 27362], 
                    borderColor: 'rgb(34, 116, 165)', 
                    backgroundColor: 'rgb(34, 116, 165)'
                     // Africa, Asia, Europe, Austrilia, South America

                }, 
                {
                    label: "Non-res visitiors entering Canada Dec 2022", 
                    data: [16546, 104839, 246323, 34392, 21055], 
                    borderColor: 'rgb( 247, 92, 3)', 
                    backgroundColor: 'rgb( 247, 92, 3)'
                     // Africa, Asia, Europe, Austrilia, South America

                }, 
                {
                    label:"Non-res visitiors entering Canada Jan 2023", 
                    data: [11357, 89845, 214876, 35144, 18562], 
                    borderColor: 'rgb(255, 134, 200)', 
                    backgroundColor: 'rgb(255, 134, 200)'
                     // Africa, Asia, Europe, Austrilia, South America

                }

             
            ]
            
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'bottom'
                }, 
                title: {
                    display: true, 
                    text: "Non-resident visitors entering Canada by country/Continet"
                }
            }, 
            maintainAspectRatio: false, 
            responsive: true
        })
    }, [])
    
    return(
        <>
            <div className={styles.container}>
                <Line data={chartData} options={chartOptions} />
            </div>
        </>
    )
}