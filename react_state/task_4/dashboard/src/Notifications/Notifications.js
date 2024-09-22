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
      nextProps.listNotifications.length !==
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }
  render() {
    const {
      handleDisplayDrawer,
      handleHideDrawer,
      displayDrawer,
      listNotifications,
      markNotificationAsRead
    } = this.props;
    console.log(this.props.displayDrawer);
    return (
      <div className={css(styles.Notifications)}>
        <div className={css(styles.text)}>
          <p onClick={handleDisplayDrawer}>
            Here is the list of notifications{" "}
          </p>
          <button
            aria-label="close"
            style={{ textAlign: "right", display: "inline" }}
            onClick={handleHideDrawer}
          >
            <img src={close} alt="close" height={20} width={20} />
          </button>
        </div>

        {displayDrawer && <ul>
          {listNotifications.length > 0 ? (
            listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem
                id={id}
                markAsRead={markNotificationAsRead}
                key={id}
                type={type}
                value={value}
                html={html}
              />
            ))
          ) : (
            <NotificationItem markAsRead={() => {}} value="No new notification for now" />
          )}
        </ul>}
      </div>
    );
  }
}

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid pink",
    padding: "20px",
  },

  text: { display: "flex", justifyContent: "space-between" },
});

export default Notifications;
