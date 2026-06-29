import { Container, Typography } from "@mui/material";
import NotificationList from "../components/NotificationList";
import { getPriorityNotifications } from "../utils/priority";

function PriorityNotifications() {
  const notifications = [
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
    {
      id: 4,
      type: "Placement",
      message: "AMD Hiring Drive",
      time: "23 Apr 2026, 9:00 AM",
      read: false,
    },
  ];

  const priority = getPriorityNotifications(notifications);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      <NotificationList
        notifications={priority}
        onRead={() => {}}
      />
    </Container>
  );
}

export default PriorityNotifications;