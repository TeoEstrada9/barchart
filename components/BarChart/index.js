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
            labels: ["BC", "AB", "SK", "ON", "MN", "PEI"], 
            datasets: [
                {
                    label: "Money spent on food & Drinks in Jan 2023 ($)", 
                    data:  [1222924, 876990, 180792, 2690116, 194966, 26612], 
                    borderColor: 'rgb(53, 162, 266)', 
                    backgroundColor: 'rgba(27, 100, 236, 0.5)'
                    // BC, AB, SK, ON, MN, PEI
                }, 
                {
                    label: "Money spent on food & Drinks in Dec 2022 ($)", 
                    data: [1282325, 940092, 192596, 2943497, 211847, 30646], 
                    borderColor: 'rgb(255, 134, 200)', 
                    backgroundColor: 'rgb(255, 134, 200)'
                    // BC, AB, SK, ON, MN, PEI


                },
                {
                    label: "Money spent on food & Drinks in Nov 2022 ($)", 
                    data: [1183020, 870367, 181162, 2775397, 197880, 29246], 
                    borderColor: 'rgb(20, 189, 235)',
                    backgroundColor: 'rgb(20, 189, 235)'
                    // BC, AB, SK, ON, MN, PEI

                }, 
                {
                    label: "Money spent on food & Drinks in Oct 2022 ($)", 
                    data: [1277382, 926328, 192274, 2968730 , 208771, 34948 ], 
                    borderColor: 'rgb(236, 164, 0)', 
                    backgroundColor: 'rgb(236, 164, 0)'
                    // BC, AB, SK, ON, MN, PEI

                }, 
                {
                    label: "Money spent on food & Drinks in Sept 2022 ($)", 
                    data: [1326006, 958801, 192570, 2935512, 211887, 37751], 
                    borderColor: 'rgb(0, 189, 157)', 
                    backgroundColor: 'rgb(0, 189, 157)'
                    // BC, AB, SK, ON, MN, PEI

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
                    text: "Monthly survey of food services and drinking places"
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