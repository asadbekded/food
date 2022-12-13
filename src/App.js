// import { HomeHeader } from "./components";
// import { DishCard } from "./components";
// import { Statistika } from "./components";
// import { SettingsNested } from "./components";
// import { SettingsHeader } from "./components";
// import { DashboardHeader } from "./components";
// import { MostOrder } from "./components";
// import { TypeOrder } from "./components";

import { Modal } from "./components/Modal/Modal";


function App() {
  return (
    <div className="container">
      {/* // 1 : HomeHeader  =>  <HomeHeader /> */}
      {/* Dishcard componenta => <DishCard/> */}
      {/*Statistica componenta => <Statistika/> */}
      {/*Settings Nested => components <SettingsNested/> */}
      {/* Dashboard header => <DashboardHeader/> */}
      {/*Settings header => <SettingsHeader/> */}
      {/*MostOrder components  <MostOrder/> */}
      {/*TypeOrder component and Charat <TypeOrder/> */}
      <Modal/>
    </div>
  );
};

export default App;
