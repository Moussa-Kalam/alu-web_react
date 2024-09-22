
import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login({ logIn }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const enableSubmit = email.length > 0 && password.length > 0;

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    console.log("click here")
    e.preventDefault();
    logIn(email, password)
    
  }

  return (
    <div className={css(styles.appBody)} data-testid="App-body">
      <p className={css(styles.text)}>Login to access the full dashboard</p>
      <form action="" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">
          email:
          <input type="email" onChange={handleChangeEmail} data-testid="email" id="email" />
        </label>
        <label htmlFor="password">
          password:
          <input onChange={handleChangePassword} type="password" data-testid="password" id="password" />
        </label>
        <button data-testid="submit-button" disabled={!enableSubmit} type="submit">ok</button>
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