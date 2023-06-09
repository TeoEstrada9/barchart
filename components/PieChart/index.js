import { useState, useEffect } from "react"
import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import { 
    Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
) 


export default function PieChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["BC", "AB", "SK", "ON", "MB", "QC"], 
            datasets: [
                {
                    label: "", 
                    data:  [5399118, 4647178, 1214618, 15386407, 1431792, 8787554], 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                      ],
                      borderWidth: 1,
                      
                }, 
              
               
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                }, 
                title: {
                    display: true, 
                    text: "Population of Candaian Provinces"
                }
            }, 
            maintainAspectRatio: false, 
            responsive: true
        })
    }, [])
    
    return(
        <>
            <div className={styles.container}>
                <Pie data={chartData} options={chartOptions} />
            </div>
        </>
    )
}