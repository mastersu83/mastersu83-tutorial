import React from "react";
import ProfileFuncComponent from "./components/ProfileFuncComponent";
import ProfileClassComponent from "./components/ProfileClassComponent";

const App = () => {
  return (
    <div>
      <ProfileFuncComponent
        name="Вася Пупкин"
        registredAt={new Date(2021, 5, 22)}
      />
      <div>-------------------------------------------------</div>
      <ProfileClassComponent
        name="Вася Пупкин"
        registredAt={new Date(2021, 5, 22)}
      />
    </div>
  );
};

export default App;
