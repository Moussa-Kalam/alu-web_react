
import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <div className={css(styles.appBody)} data-testid="App-body">
      <p className={css(styles.text)}>Login to access the full dashboard</p>
      <form action="">
        <label htmlFor="email">
          email:
          <input type="email" data-testid="email" id="email" />
        </label>
        <label htmlFor="password">
          password:
          <input type="password" data-testid="password" id="password" />
        </label>
        <button>ok</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  appBody: {
    flex: 1,
    paddingLeft: "60px",
    margin: "20px",
  },
  text: {
    fontSize: "32px",
  },
});