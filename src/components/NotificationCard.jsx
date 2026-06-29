import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@mui/material";

function NotificationCard({ notification, onRead }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.type}
        </Typography>

        <Typography>
          {notification.message}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {notification.time}
        </Typography>

        <Chip
          label={notification.read ? "Read" : "Unread"}
          color={notification.read ? "success" : "error"}
          sx={{ mt: 2 }}
        />

        {!notification.read && (
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => onRead(notification.id)}
          >
            Mark as Read
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default NotificationCard;