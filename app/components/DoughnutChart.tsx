'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  data?: number[];
  backgroundColor?: string[];
};
export const DoughnutChart = ({
  data,
  backgroundColor,
}: DoughnutChartProps) => {
  if (data && backgroundColor) {
    if (data.length !== backgroundColor.length) {
      throw new Error(
        'Data and backgroundColor arrays must have the same length'
      );
    }
  }

  const chartData = {
    datasets: [
      {
        data: data || [12, 19, 3],
        backgroundColor: backgroundColor || ['#ef4444', '#3b82f6', '#facc15'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};
