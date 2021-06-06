import React from "react";
import { Route } from "react-router-dom";

function DecisionRoute({
  trueComponent,
  falseComponent,
  decisionFunc,
  ...rest
}) {
  return (
    <Route
      {...rest}
      component={decisionFunc() ? trueComponent : falseComponent}
    />
  );
}

export default DecisionRoute;
