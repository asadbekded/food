// import { HomeHeader } from "./components";
// import { DishCard } from "./components";
// import { Statistika } from "./components";
// import { SettingsNested } from "./components";
// import { SettingsHeader } from "./components";
// import { DashboardHeader } from "./components";

import { PricebarHeader, PricebarHEader } from "./components/PricebarHEader/PricebarHeader";

function App() {
  return (
    <div className="container">
      {/* // 1 : HomeHeader  =>  <HomeHeader /> */}
      {/* Dishcard componenta => <DishCard/> */}
      {/*Statistica componenta => <Statistika/> */}
      {/*Settings Nested => components <SettingsNested/> */}
      {/* Dashboard header => <DashboardHeader/> */}
      {/*Settings header => <SettingsHeader/> */}
      <PricebarHeader></PricebarHeader>
    </div>
  );
};

export default App;
