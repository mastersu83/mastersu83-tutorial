import React from "react";

const ProfileFuncComponent = (props) => {
  const name = props.name.split(" ")[0];
  const date = props.registredAt.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <div>Функциональная компонента</div>
      <div>
        Привет, <b>{name}!</b>
      </div>
      <div>Дата регистрации: {date} </div>
    </div>
  );
};

export default ProfileFuncComponent;
