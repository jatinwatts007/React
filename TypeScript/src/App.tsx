import React, { useState, lazy /* Suspence */ } from "react";
// import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import store from "./store";
// import ThemeContext from "./ThemeContext";
// import NavBar from "./NavBar";

// const Details = lazy(() => import("./Details"));

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
  //  const themeHook = useState("darkblue");
  return (
    // <ThemeContext.Provider value={themeHook}>
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
    //  </ThemeContext.Provider>
  );
};

// render(<App />, document.getElementById("root"));
export default App;
