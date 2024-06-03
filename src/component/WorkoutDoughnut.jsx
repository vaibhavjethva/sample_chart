import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart",
    },
  },
};

const labels = [
  "Cardio",
  "Strength Training",
  "Balance and Stability",
  "Flexibility Training",
];

const specificColors = [
  "rgb(83,124,56)",
  "rgb(123,165,145)",
  "rgb(204, 34, 43)",
  "rgb(241, 91, 76)",
];

const specificData = [20, 12, 12, 56];

const data = {
  labels,
  datasets: [
    {
      data: specificData,
      backgroundColor: specificColors,
    },
  ],
};

export const WorkoutDoughnut = () => {
  return (
    <>
      <h1>Today's Workout Distribution Chart</h1>
      <Doughnut style={{ width: '50%', margin: '0 auto' }} options={options} data={data} />
    </>
  );
};
