import React from "react";
import logo from "../assets/logo.jpeg";
import "./Header.css";

export default function Header() {
  return (
    <div className="App-header" data-testid="App-header">
      <img src={logo} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}
