import React from "react";
import Phrase from "./components/Phrase";
import EmptyBlock from "./components/EmptyBlock";

const App = () => {
  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый",
  ];
  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак",
  ];
  const [mainState, setMainState] = React.useState([]);

  const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const genRandomNum = () => {
    let numArray = [];
    let num1 = randomNumber(0, adjectivesArr.length - 1);
    let num2 = randomNumber(0, adjectivesArr.length - 1);
    let num3 = randomNumber(0, nounsArr.length - 1);
    numArray.push(num1, num2, num3);
    setMainState((prev) => [...prev, numArray]);
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
              mainState={mainState}
              key={index}
              index={index}
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
