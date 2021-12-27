import React from "react";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";
import { adjectivesArr, nounsArr } from "./state";

const App = () => {
  const [mainState, setMainState] = React.useState([]);

  const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const genRandomNum = () => {
    let num1 = randomNumber(0, adjectivesArr.length - 1);
    let num2 = randomNumber(0, adjectivesArr.length - 1);
    let num3 = randomNumber(0, nounsArr.length - 1);
    setMainState((prev) => [...prev, `${num1} ${num2} ${num3}`]);
  };

  const onClearMainState = () => {
    setMainState([]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        {mainState &&
          mainState.map((p, index) => (
            <Phrase
              key={index}
              phrase={p}
              adjectivesArr={adjectivesArr}
              nounsArr={nounsArr}
            />
          ))}
      </div>
      {!mainState.length && <EmptyBlock />}
      <button onClick={genRandomNum} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={onClearMainState} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
};

export default App;
