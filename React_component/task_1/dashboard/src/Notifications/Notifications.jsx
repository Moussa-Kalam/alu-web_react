import React from "react";
import "./Notifications.css";
import close from "../assets/close.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ listNotifications = [] }) => {
  return (
    <div className="Notifications">
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        Here is the list of notifications{" "}
        <button
          aria-label="close"
          style={{ textAlign: "right", display: "inline" }}
          onClick={() => console.log("Close button has been clicked")}
        >
          <img src={close} alt="close" height={20} width={20} />
        </button>
      </p>
      <ul>
      {
        listNotifications.length > 0 ? (
          listNotifications.map(({ id, type, value, html }) => (
            <NotificationItem key={id} type={type} value={value} html={html}  />
          ))
        ) : (
          <NotificationItem value="No new notification for now" />
        )
      }
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


export default Notifications;
