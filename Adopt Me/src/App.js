import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// your code is going to go here,for now
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
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
