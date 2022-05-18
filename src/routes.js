import React from "react";

const Homepage = React.lazy(() => import("./views/Homepage"));

const routes = [
  { path: "/", name: "Homepage", exact: true, component: Homepage },
];

export default routes;
