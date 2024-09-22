import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import { getLatestNotifications } from "../utils/utils";
import PropTypes from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

export default class App extends React.Component {
  isLoggedIn = false;
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotifications() },
  ];


  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "h") {
        alert("Logging you out");
        this.props.logOut();
      }
    });
  }
  render() {

    return (
      <div className="app">
        <Notifications listNotifications={this.listNotifications} />
        <Header />
        <BodySectionWithMarginBottom title={this.isLoggedIn ? 'Course list' : "Log in to continue"}>
          {this.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        </BodySectionWithMarginBottom>
        <BodySection title="News from the School">
          <p>Latest school gossip</p>
        </BodySection>
        <Footer />
      </div>
    );
  }
}

App.defaultProps = {
  logOut: () => { },
};

App.propTypes = {
  logOut: PropTypes.func,
};


