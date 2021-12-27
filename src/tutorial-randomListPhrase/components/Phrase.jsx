import React from "react";

const Phrase = (props) => {
  let num = props.mainState[props.index].split(" ");
  let phrase =
    props.adjectivesArr[num[0]] +
    " " +
    props.adjectivesArr[num[1]] +
    " " +
    props.nounsArr[num[2]];

  return (
    <div className="block">
      <h3>{phrase}</h3>
    </div>
  );
};

export default Phrase;
