import React from "react";
import './Login.css'

export default function Login() {
  return (
    <div className="App-body" data-testid="App-body">
      <p>Login to access the full dashboard</p>
      <form action="">
        <label htmlFor="email">
          email:
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          password:
          <input type="password" id="password" />
        </label>
        <button>ok</button>
      </form>
    </div>
  );
}
