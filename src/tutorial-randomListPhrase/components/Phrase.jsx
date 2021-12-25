import React from "react";

const Phrase = (props) => {
  return (
    <div className="block">
      <h3>
        {props.adjectivesArr[props.mainState[props.index][0]]}{" "}
        {props.adjectivesArr[props.mainState[props.index][1]]}{" "}
        {props.nounsArr[props.mainState[props.index][1]]}
      </h3>
    </div>
  );
};

export default Phrase;
