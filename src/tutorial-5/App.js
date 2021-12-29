import React from "react";
import Form from "./components/Form";
import { Grid, Typography } from "@mui/material";
import Comments from "./components/Comments";

const App = () => {
  const [comments, setComments] = React.useState([]);
  const handleSubmit = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  React.useEffect(() => {
    setComments([...JSON.parse(localStorage.getItem("comments"))]);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          sx={{
            p: "15px",
            border: "1px solid rgba(0, 0, 0, .2)",
            borderRadius: "5px",
            // boxShadow: "0 0 10px 0 black",
            marginTop: "15px",
            width: "400px",
          }}
        >
          <Typography variant="h5" component="div" gutterBottom>
            Отзывы:
          </Typography>
          {comments.map((obj, index) => (
            <Comments
              deleteComment={deleteComment}
              key={index}
              index={index}
              fullName={obj.fullName}
              text={obj.text}
              date={obj.createdAt}
            />
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Form handleSubmit={handleSubmit} />
      </Grid>
    </>
  );
};

export default App;
