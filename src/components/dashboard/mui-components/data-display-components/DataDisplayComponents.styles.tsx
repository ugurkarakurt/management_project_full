import { useDashboardCardAction } from "@/context/DashboardCardAction.context";
import { Box, Card, Link, styled, Typography } from "@mui/material";

interface StyledProps {
  $alignment?: 'left' | 'center' | 'right';
}

const shouldForwardProp = (prop: string) => !prop.startsWith('$');

export const BasicInputsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const FormGroupWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 30,
}));

export const FormGroupBox = styled(Card)(({ theme }) => ({
  gap: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  padding: 30,
  borderRadius: 4,

}));

export const InputWrapperDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
}));

export const FormGroupTitle = styled(Typography)(({ theme }) => ({
  flex: 1,
  color: theme.palette.text.primary,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const FormLink = styled(Link)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const BaseInputWrapper = styled(Box, {
  shouldForwardProp
})<StyledProps>(({ theme, $alignment }) => ({
  display: "flex",
  justifyContent: $alignment || 'center',
  alignItems: "center",
  marginTop: theme.spacing(3),
}));

function withDashboardAlignment<P extends object>(
  WrappedComponent: React.ComponentType<P & { $alignment?: string }>
) {
  const WithDashboardAlignmentComponent = (props: Omit<P, '$alignment'>) => {
    const { alignment } = useDashboardCardAction();
    return <WrappedComponent {...props as P} $alignment={alignment} />;
  };

  WithDashboardAlignmentComponent.displayName = `WithDashboardAlignment(${WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;

  return WithDashboardAlignmentComponent;
}

export const InputWrapper = withDashboardAlignment(BaseInputWrapper);