import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
//import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

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
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        //<header>
         / /<Link to="/">
           // <h1>Adopt Me!</h1>
          //</Link>
       // </header>
       <NavBar/>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
