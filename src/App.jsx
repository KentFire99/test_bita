import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./scss/App.scss";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
          <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default App;
