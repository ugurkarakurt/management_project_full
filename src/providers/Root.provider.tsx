'use client';
import { SessionProvider } from "next-auth/react";
import { DashboardCardActionProvider } from '@/context/DashboardCardAction.context';
import ThemeProvider from '@/providers/Theme.provider';
import CssBaseline from "@mui/material/CssBaseline";
import { NotificationProvider } from "@/context/Notification.context";

export default function RootProvider({ children }: { children: React.ReactNode; }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <NotificationProvider>
          <CssBaseline />
          <DashboardCardActionProvider>
            {children}
          </DashboardCardActionProvider>
        </NotificationProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}