export default function NotificationItem({ type, value, html, markAsRead, id }) {
  if (html) {
    return (
      <li onClick={() => markAsRead(id)} data-priority={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    );
  } else {
    return <li onClick={() => markAsRead(id)} data-priority={type}>{value}</li>;
  }
}