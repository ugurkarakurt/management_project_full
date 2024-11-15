// src/contexts/NotificationContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { AlertColor } from '@mui/material/Alert';

interface Notification {
  id: string;
  message: string;
  type: AlertColor;
}

interface NotificationContextValue {
  showNotification: (message: string, type: AlertColor) => void;
  closeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (message: string, type: AlertColor = 'info') => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, message, type }]);

    // Otomatik silme (optional)
    setTimeout(() => {
      closeNotification(id);
    }, 3000);
  };

  const closeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ showNotification, closeNotification }}>
      {children}
      {notifications.map((notification, index) => (
        <Snackbar
          key={notification.id}
          open={true}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          // Stack effect
          style={{
            marginBottom: `${index * 70}px`,
            zIndex: 9999,
          }}
        >
          <Alert
            onClose={() => closeNotification(notification.id)}
            severity={notification.type}
            variant="filled"
            elevation={6}
            sx={{
              width: '100%',
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </NotificationContext.Provider>
  );
};

// Custom hook for using notifications
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};