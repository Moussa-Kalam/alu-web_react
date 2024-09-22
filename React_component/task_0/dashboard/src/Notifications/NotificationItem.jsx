export default function NotificationItem({ type, value, html }) {
  if (html) {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={{ __html: html }}></li>
    );
  } else {
    return <li data-priority={type}>{value}</li>;
  }
}