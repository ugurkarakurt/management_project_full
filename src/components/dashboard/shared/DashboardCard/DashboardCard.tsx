
"use client"
import React from "react";
import { CardContent, Box, IconButton } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from 'next/navigation'
import { useTheme } from '@mui/material/styles';
import { ActionButtons, DashboardCardContainer, DashboardCardContainerHeader, DashboardCardContainerHeaderTitle, Description, IconArrowLeftSize, Title, TitleWrapper } from "./DashboardCard.styles";
import DashboardCardActionButtons from "./DashboardCardActionButtons";

type Props = {
  title?: string;
  description?: string[];
  children?: JSX.Element;
};

const DashboardCard = ({ title, description, children }: Props) => {
  const router = useRouter()
  const theme = useTheme();

  return (
    <DashboardCardContainer>
      <DashboardCardContainerHeader>
        <DashboardCardContainerHeaderTitle>
          <TitleWrapper>
            <IconButton onClick={() => router.back()}>
              <IconArrowLeftSize color={theme.palette.text.primary} stroke={2.5} size="2.5rem" />
            </IconButton>
            {title ? <Title variant="h1">{title}</Title> : ""}
          </TitleWrapper>
          <ActionButtons>
            <DashboardCardActionButtons />
          </ActionButtons>
        </DashboardCardContainerHeaderTitle>
        {description ? (
          description.map((item, index) => (
            <Description key={item + index} variant="h6">{item}</Description>
          ))
        ) : ""}
      </DashboardCardContainerHeader>
      <Box sx={{ padding: 0 }} >
        <CardContent sx={{ position: "relative", padding: "24px 0" }}>
          {children}
        </CardContent>
      </Box>
    </DashboardCardContainer>
  );
};

export default DashboardCard;
