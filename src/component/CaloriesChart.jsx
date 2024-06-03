import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "21 Apr 2024",
  "22 Apr 2024",
  "23 Apr 2024",
  "24 Apr 2024",
  "25 Apr 2024",
  "26 Apr 2024",
  "27 Apr 2024",
];

const specificColors = [
  "rgb(83,124,56)",
  "rgb(123,165,145)",
  "rgb(204, 34, 43)",
  "rgb(241, 91, 76)",
  "rgb(250, 164, 27)",
  "rgb(255,212,91)",
  "rgb(255,229,180)",
];
const specificData = [520, 480, 680, 480, 420, 200, 400];
const data = {
  labels,
  datasets: [
    {
      label: "Calories Burned",
      data: specificData,
      backgroundColor: specificColors,
    },
  ],
};

export const CaloriesChart = () => {
  return (
    <>
      <h1>Calories Burned Chart</h1>
      <Bar options={options} data={data} />
    </>
  );
};
