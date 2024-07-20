'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: [
    'Apetizer',
    'Beer',
    'Beverage',
    'Desert',
    'Fried rice',
    'Meal',
    'Noodle',
    'Salad',
    'Side',
    'Soup',
    'Stir fry',
    'Sushi',
  ],
  datasets: [
    {
      label: '% of Sales',
      data: [17, 0.3, 6, 6, 0.7, 19, 2, 27, 1.8, 0.2, 3, 10, 7],
      backgroundColor: [
        'violet',
        'cyan',
        'green',
        'yellow',
        'orange',
        'red',
        'blue',
        'magenta',
        'grey',
        'lightblue',
        'khaki',
        'lime',
      ],
      borderColor: [
        'violet',
        'cyan',
        'green',
        'yellow',
        'orange',
        'red',
        'blue',
        'magenta',
        'grey',
        'lightblue',
        'khaki',
        'lime',
      ],
      borderWidth: 2,
    },
  ],
}

function PieChart() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <h4>Sales % by category</h4>
      <br />
      <Pie data={data} />
    </div>
  )
}

export default PieChart
