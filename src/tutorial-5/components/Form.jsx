import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const Form = (props) => {
  const [input, setInput] = React.useState({
    fullName: "",
    email: "",
    text: "",
    createdAt: "",
  });

  let options = {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    year: "numeric",
    hour12: false,
  };
  let date = new Date().toLocaleString("en-EN", options);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, createdAt: date });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(input);
  };

  return (
    <form onSubmit={onClickSubmit}>
      <Grid
        sx={{
          p: "15px",
          border: "1px solid rgba(0, 0, 0, .2)",
          borderRadius: "5px",
          marginTop: "15px",
          width: "400px",
        }}
        container
        flexDirection="column"
      >
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h5"
          component="div"
          gutterBottom
        >
          Обратная связь:
        </Typography>
        <TextField
          onChange={onInputChange}
          id="outlined-basic"
          label="Имя"
          name="fullName"
          variant="outlined"
          sx={{ marginBottom: "10px" }}
          value={input.fullName}
        />
        <TextField
          onChange={onInputChange}
          id="outlined-basic"
          label="Почта"
          name="email"
          variant="outlined"
          sx={{ marginBottom: "10px" }}
          value={input.email}
        />
        <TextField
          onChange={onInputChange}
          id="outlined-multiline-static"
          label="Текст..."
          name="text"
          multiline
          rows={5}
          sx={{ marginBottom: "10px" }}
          value={input.text}
        />
        <Button type="submit" variant="contained">
          ОТПРАВИТЬ
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
