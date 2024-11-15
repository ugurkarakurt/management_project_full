// DashboardCardAction.context.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
type AlignmentType = 'left' | 'center' | 'right';
type DeviceType = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface DashboardCardActionContextType {
  alignment: AlignmentType;
  device: DeviceType;
  setAlignment: (value: AlignmentType) => void;
  setDevice: (value: DeviceType) => void;
  handleAlignment: (event: React.MouseEvent<HTMLElement>, newAlignment: AlignmentType | null) => void;
  handleDevice: (event: React.MouseEvent<HTMLElement>, newDevice: DeviceType | null) => void;
}

interface DashboardCardActionProviderProps {
  children: ReactNode;
}

// Context
const DashboardCardActionContext = createContext<DashboardCardActionContextType | undefined>(undefined);

// Provider Component
export const DashboardCardActionProvider: React.FC<DashboardCardActionProviderProps> = ({ children }) => {
  const [alignment, setAlignment] = useState<AlignmentType>('center');
  const [device, setDevice] = useState<DeviceType>('lg');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: AlignmentType | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevice = (
    event: React.MouseEvent<HTMLElement>,
    newDevice: DeviceType | null
  ) => {
    if (newDevice !== null) {
      setDevice(newDevice);
    }
  };

  const value = {
    alignment,
    device,
    setAlignment,
    setDevice,
    handleAlignment,
    handleDevice,
  };

  return (
    <DashboardCardActionContext.Provider value={value}>
      {children}
    </DashboardCardActionContext.Provider>
  );
};

// Custom Hook
export const useDashboardCardAction = () => {
  const context = useContext(DashboardCardActionContext);
  if (context === undefined) {
    throw new Error('useDashboardCardAction must be used within a DashboardCardActionProvider');
  }
  return context;
};