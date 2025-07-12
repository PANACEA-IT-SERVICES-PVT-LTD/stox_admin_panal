import { createSlice } from '@reduxjs/toolkit';

const NotificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    unreadCount: 1,
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
      state.unreadCount += 1;
    },
    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(
        (n) => n.id === notificationId
      );
      if (notification) {
        notification.read = true;
        state.unreadCount -= 1;
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
      state.unreadCount = 0;
    },
  },
});

export const { addNotification, markAsRead, clearNotifications } =
  NotificationSlice.actions;

export default NotificationSlice.reducer;
