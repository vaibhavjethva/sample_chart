import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['November 2023', 'December 2023', 'January 2024', 'February 2024', 'March 2024', 'April 2024'];
  
  const specificColors = ['rgb(83,124,56)',
  'rgb(123,165,145)',
  'rgb(204, 34, 43)',
  'rgb(241, 91, 76)',
  'rgb(250, 164, 27)',
  'rgb(255,212,91)'
  ]
  const specificData = [4000, 500, 3500, 1100, 13600, 12000];
  const data = {
    labels,
    datasets: [
      {
        label: 'Water Intake',
        data: specificData,
        backgroundColor: specificColors
      },
      
    ],
  };
  
  export const WaterIntakeChart = ()=>{
    return (
        <>
          <h1>Water Intake Chart</h1>
          <Bar options={options} data={data} />
        </>
      );
  }