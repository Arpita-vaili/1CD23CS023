import { useState } from "react";
import { Container, Typography } from "@mui/material";
import NotificationList from "../components/NotificationList";
import Filter from "../components/Filter";

function AllNotifications() {
  const [filter, setFilter] = useState("All");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Placement",
      message: "CSX Corporation Hiring Drive",
      time: "22 Apr 2026, 5:51 PM",
      read: false,
    },
    {
      id: 2,
      type: "Result",
      message: "Mid Semester Results Published",
      time: "21 Apr 2026, 11:20 AM",
      read: false,
    },
    {
      id: 3,
      type: "Event",
      message: "Hackathon Registration Started",
      time: "20 Apr 2026, 2:30 PM",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.type === filter);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <Filter value={filter} onChange={setFilter} />

      <NotificationList
        notifications={filtered}
        onRead={markAsRead}
      />
    </Container>
  );
}

export default AllNotifications;