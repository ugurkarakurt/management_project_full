import { useDashboardCardAction } from "@/context/DashboardCardAction.context";
import { applyDeviceStyles } from "@/utils/breakpoint-helper";
import { Box, Stack, styled, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";

interface StyledProps {
  $device?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const shouldForwardProp = (prop: string) => !prop.startsWith('$');

export const DashboardCardContainer = styled(Box)(({ theme }) => ({
}));

export const DashboardCardContainerHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 20,
  marginBottom: 20,
}));

export const BaseDashboardCardContainerHeaderTitle = styled(Box, { shouldForwardProp })<StyledProps>(({ theme, $device }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 20,

  ...applyDeviceStyles($device, {
    flexDirection: "column-reverse",
    gap: 10,
  }),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
  },

  [theme.breakpoints.down("xs")]: {
    flexDirection: "row",
  },
}));

export const BaseTitleWrapper = styled(Box, {
  shouldForwardProp
})<StyledProps>(({ theme, $device }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 10,

  ...applyDeviceStyles($device, {
    gap: 5,
  }),

  [theme.breakpoints.down("md")]: {
    gap: 5,
  },
}));

export const BaseTitle = styled(Typography, { shouldForwardProp })<StyledProps>(({ theme, $device }) => ({
  marginBottom: 7,

  ...applyDeviceStyles($device, {
    marginBottom: 2,
    fontSize: 20,
  }),

  [theme.breakpoints.down("md")]: {
    marginBottom: 2,
    fontSize: 20,
  },
}));

// SVG için özel wrapper component
const StyledIconWrapper = styled(Box, { shouldForwardProp })<StyledProps>(({ theme, $device }) => ({
  width: 48,
  height: 48,
  position: "relative",
  '& svg': {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    width: 36,
    height: 36,
    ...applyDeviceStyles($device, {
      width: 24,
      height: 24,
    }),
    [theme.breakpoints.down("md")]: {
      width: 24,
      height: 24,
    },
  },
  ...applyDeviceStyles($device, {
    width: 36,
    height: 36,
  }),
  [theme.breakpoints.down("md")]: {
    width: 36,
    height: 36,
  },
}));

export const BaseIconArrowLeftSize = ({ $device, ...props }: any) => (
  <StyledIconWrapper $device={$device}>
    <IconArrowLeft {...props} />
  </StyledIconWrapper>
);

export const BaseDescription = styled(Typography, {
  shouldForwardProp
})<StyledProps>(({ theme, $device }) => ({
  width: "100%",
  paddingLeft: "77px",
  color: theme.palette.text.secondary,

  ...applyDeviceStyles($device, {
    paddingLeft: 20,
  }),

  [theme.breakpoints.down("md")]: {
    paddingLeft: 20,
  },
}));

export const BaseActionButtons = styled(Box, {
  shouldForwardProp
})<StyledProps>(({ theme, $device }) => ({
  ...applyDeviceStyles($device, {
    alignSelf: "center",
    gap: 10,
  }),

  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    gap: 10,
  },
}));

export const BaseDashboardCardActionButtonsContainer = styled(Stack, {
  shouldForwardProp
})<StyledProps>(({ theme, $device }) => ({
  gap: 10,

  ...applyDeviceStyles($device, {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  }),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
}));

export const DashboardCardActionButtonsDeviceContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none"
  },
}));

export const DashboardCardActionButtonsSelectedToggleButton = styled(ToggleButton)(({ theme }) => ({
  // "&.Mui-selected": {
  //   backgroundColor: "dodgerblue",
  //   color: "white",
  // },
}));


function withDashboardDevice<P extends object>(
  WrappedComponent: React.ComponentType<P & { $device?: string }>
) {
  const WithDashboardDevice = (props: Omit<P, '$device'>) => {
    const { device } = useDashboardCardAction();
    return <WrappedComponent {...props as P} $device={device} />;
  };

  WithDashboardDevice.displayName = `WithDashboardDevice(${WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;

  return WithDashboardDevice;
}

export const DashboardCardContainerHeaderTitle = withDashboardDevice(BaseDashboardCardContainerHeaderTitle);
export const TitleWrapper = withDashboardDevice(BaseTitleWrapper);
export const Title = withDashboardDevice(BaseTitle);
export const IconArrowLeftSize = withDashboardDevice(BaseIconArrowLeftSize);
export const Description = withDashboardDevice(BaseDescription);
export const ActionButtons = withDashboardDevice(BaseActionButtons);
export const DashboardCardActionButtonsContainer = withDashboardDevice(BaseDashboardCardActionButtonsContainer);