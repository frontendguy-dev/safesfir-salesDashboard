'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Sales by category(values/$1k)',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

const labels = ['DoorDash', 'GrubHub', 'Smile dining', 'Uber Eats']

export const data = {
  labels,
  datasets: [
    {
      label: 'Fried rice',
      data: [4.836, 6.341, 0.92, 1.473],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Apetizer',
      data: [28.613, 19.293, 3.457, 5.726],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Kid\'s Menu',
      data: [1.315, 1.665, 0.25, 0.468],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
}

export function StackedChart() {
  return <Bar options={options} data={data} />
}
