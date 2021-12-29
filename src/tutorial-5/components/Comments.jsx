import React from "react";
import { Grid, Typography } from "@mui/material";

const Comments = (props) => {
  return (
    <>
      <Grid
        flexWrap="noWrap"
        container
        sx={{ marginBottom: "10px", p: "15px" }}
        alignItems="center"
      >
        <Grid
          sx={{
            p: "10px",
            border: "1px solid rgba(0, 0, 0, .2)",
            borderRadius: "30px",
            height: "61px",
            marginRight: "10px",
          }}
          item
          alignSelf="center"
        >
          avatar
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Typography variant="h5" component="div">
            {props.fullName}
          </Typography>
          <Typography
            sx={{ color: "rgba(0, 0, 0, .6)" }}
            variant="subtitle1"
            component="div"
            gutterBottom
          >
            {props.text}
          </Typography>
          <Typography
            sx={{ color: "rgba(0, 0, 0, .6)" }}
            variant="subtitle2"
            component="div"
            gutterBottom
          >
            {props.date}
          </Typography>
        </Grid>
        <Grid item>
          <button
            className="rotate"
            onClick={() => props.deleteComment(props.index)}
          >
            +
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default Comments;
