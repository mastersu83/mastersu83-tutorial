import React from "react";

class ProfileClassComponent extends React.Component {
  name = this.props.name.split(" ")[0];
  date = this.props.registredAt.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  render() {
    return (
      <div>
        <div>Классовый компонент</div>
        <div>
          Привет, <b>{this.name}!</b>
        </div>
        <div>
          Дата регистрации:
          {this.date}
        </div>
      </div>
    );
  }
}

export default ProfileClassComponent;
