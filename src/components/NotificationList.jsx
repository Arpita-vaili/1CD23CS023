import NotificationCard from "./NotificationCard";

function NotificationList({ notifications, onRead }) {
  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onRead={onRead}
        />
      ))}
    </>
  );
}

export default NotificationList;