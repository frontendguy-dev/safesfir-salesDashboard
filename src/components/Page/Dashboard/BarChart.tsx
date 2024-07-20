'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
)

const BarChart = () => {
  const data = {
    labels: [
      '10am - 11am',
      '11am - 12pm',
      '12pm - 1pm',
      '1pm - 2pm',
      '2pm - 3pm',
      '3pm - 4pm',
      '4pm - 5pm',
      '5pm - 6pm',
      '6pm - 7pm',
      '7pm - 8pm',
      '8pm - 9pm',
      '9pm - 10pm',
    ],
    datasets: [
      {
        label: 'Sales ($)',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        data: [22.6, 95.3, 112.5, 79.8, 64.8, 60, 62.7, 86.3, 116, 120.5, 99.7, 51.7],
      },
    ],
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart
