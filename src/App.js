import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import makeStyles from "@mui/styles/makeStyles";
import LinearProgress from "@mui/material/LinearProgress";
import GenericNotFound from "./views/GenericNotFound";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.6em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#707070",
      borderRadius: theme.shape.borderRadius,
    },
  },
  fallback: {
    marginTop: "64px",
    [theme.breakpoints.down("md")]: {
      marginTop: "56px",
    },
  },
}));

const App = (props) => {
  const classes = useStyles(props);

  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={`${index}-route`}
        exact={route.exact}
        path={route.path}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });

  return (
    <div className="App">
      <Suspense
        fallback={
          <LinearProgress color="secondary" className={classes.fallback} />
        }
      >
        <Switch>
          {menu}
          <Route path="/" component={GenericNotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
