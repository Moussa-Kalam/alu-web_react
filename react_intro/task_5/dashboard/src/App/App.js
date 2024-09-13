import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../../../../task_3/dashboard/src/Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

function App() {
  return (
    <div className="container">
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
