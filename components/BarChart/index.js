import { useState, useEffect } from "react"
import styles from './BarChart.module.css'


import { Bar } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip,
    Legend
) 


export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"], 
            datasets: [
                {
                    label: "Sales $", 
                    data:  [15235, 12553, 21635, 13214, 19245, 16524, 14295], 
                    borderColor: 'rgb(53, 162, 266)', 
                    backgroundColor: 'rgba(27, 100, 236, 0.5)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                }, 
                title: {
                    display: true, 
                    text: "Daily Revenue"
                }
            }, 
            maintainAspectRatio: false, 
            responsive: true
        })
    }, [])
    
    return(
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}