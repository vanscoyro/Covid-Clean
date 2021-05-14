import React from "react";
import { useHistory } from "react-router-dom";
import SpreadIllustration from "../components/SpreadIllustration";
import Benefits from "../components/Benefits";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 300,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  let history = useHistory();

  const redirect = () => {
    history.push("/locations");
  };

  return (
    <div className="pt-5">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <SpreadIllustration data={"SPREAD ILLUSTRATION PROP DATA"} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Button
                variant="contained"
                color="secondary"
                onClick={redirect}
                type="button"
                className="btn btn-dark"
              >
                Locations
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>FEATURES OF APP</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Benefits data={"THE DATA THATS SENT OVER VIA PROPS"} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Benefits data={"PROP DATA 2"} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Benefits data={"PROP DATA 3"} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

// function Home() {
//   let history = useHistory();

//   const redirect = () => {
//     history.push("/locations");
//   };
//   return (
//     <div className="pt-5  text-center ">
//       <a>HOME PAGE</a>
//       <br />
//       <a>SPREAD ILLUSTRATION COMPONENT GOES HERE</a>
//       <SpreadIllustration />
//       <br />

//       <br />
//       <a>FEATURES OF APP COMPONENT GOES HERE</a>
//       <a href="https://placeholder.com">
//         <img src="https://via.placeholder.com/800x200"></img>
//       </a>
//       <br />
//       <Benefits />
//       <br />
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={redirect}
//         type="button"
//         className="btn btn-dark"
//       >
//         Locations
//       </Button>
//     </div>
//   );
// }

export default Home;
