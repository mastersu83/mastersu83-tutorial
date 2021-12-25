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

  const randomNumber = (min = 100, max = 999) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const genRandomNum = () => {
    let num = randomNumber();
    setMainState((prev) => [
      ...prev,
      Array.prototype.concat(
        num
          .toString(10)
          .split("")
          .map((int) => parseInt(int, 10))
      ),
    ]);
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
