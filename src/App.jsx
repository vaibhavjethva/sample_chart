import { CaloriesChart } from "./component/CaloriesChart";
import { FoodTable } from "./component/FoodTable";
import { WaterIntakeChart } from "./component/WaterIntakeChart";
import { WorkoutChart } from "./component/WorkoutChart";
import { WorkoutDoughnut } from "./component/WorkoutDoughnut";
function App() {
  return (
    <div>
      <FoodTable />
      <CaloriesChart />
      <WaterIntakeChart />
      <WorkoutChart />
      <WorkoutDoughnut />
    </div>
  );
}

export default App;
