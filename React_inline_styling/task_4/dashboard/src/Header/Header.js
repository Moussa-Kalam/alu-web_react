import React from "react";
import logo from "../assets/logo.jpeg";
import { StyleSheet, css } from "aphrodite";

export default function Header() {
  return (
    <div className={css(styles.AppHeader)} data-testid="App-header">
      <img className={css(styles.AppHeaderImg)} src={logo} alt="logo" />
      <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
    </div>
  );
}


const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    borderBottom: '4px solid red',
    marginBottom:' 40px',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  AppHeaderImg: {
    height: '300px',
  },
  AppHeaderH1: {
    color:'red',
    fontSize: '60px'
  },
});