import React from "react";
import "./App.css";
import Header from "./components/header";
import Authors from "./components/Authors";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full lg:w-2/3">
          <Books />
        </div>
        <div className="w-full lg:w-1/3">
          <Authors />
        </div>
      </div>
    </div>
  );
}

export default App;
