import { PlanterHeader, PlantTable } from "components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <PlanterHeader />
      </header>
      <PlantTable />
    </div>
  );
};

export default App;
