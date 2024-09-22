import React from "react";
import close from "../assets/close.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite/no-important";

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  render() {
    return (
      <div className={css(styles.Notifications)}>
        <p className={css(styles.text)}>
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
          {this.props.listNotifications.length > 0 ? (
            this.props.listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem
                id={id}
                markAsRead={this.markAsRead}
                key={id}
                type={type}
                value={value}
                html={html}
              />
            ))
          ) : (
            <NotificationItem value="No new notification for now" />
          )}
        </ul>
      </div>
    );
  }
}

Notifications.defaultProps = {
  listNotifications: [],
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid pink",
    padding: "20px",
  },

  text: { display: "flex", justifyContent: "space-between" },
});

export default Notifications;
