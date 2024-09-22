import React, { memo } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

function NotificationItem({ type, value, html, markAsRead, id }) {
  if (html) {
    return (
      <li className={css(type === "urgent" ? styles.urgentListItem : styles.listItem)} onClick={() => markAsRead(id)} data-priority={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    );
  } else {
    return <li className={css(type === "urgent" ? styles.urgentListItem : styles.listItem)} onClick={() => markAsRead(id)} data-priority={type}>{value}</li>;
  }
}

const styles = StyleSheet.create({
  listItem: {
    color: "blue",
  },
  urgentListItem: {
    color: "red",
  }
});

export default memo(NotificationItem);