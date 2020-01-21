import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "lucy",
  //     animal: "Dog",
  //     breed: "labra"
  //   }),
  //   React.createElement(Pet, {
  //     name: "kaka",
  //     animal: "bird",
  //     breed: "koyal"
  //   }),
  //   React.createElement(Pet, {
  //     name: "mussi",
  //     animal: "Dog",
  //     breed: "mixed"
  //   })
  // ]);
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
