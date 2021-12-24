import React from "react";

const Form = () => {
  let email = null;
  let password = null;
  const onChange = (e) => {
    if (e.target.name === "email") {
      email = e.target.value;
    } else {
      password = e.target.value;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Заполните оба поля");
    } else {
      console.log({ email, password });
      email = null;
      password = null;
      e.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={onChange}
          type="text"
          placeholder="E-Mail"
        />
        <input
          name="password"
          onChange={onChange}
          type="password"
          placeholder="Пароль"
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Form;
