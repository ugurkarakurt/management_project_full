import React from "react";
import { Box, CardContent, Skeleton, Stack } from "@mui/material";
import {
  DashboardCardContainer,
  DashboardCardContainerHeader,
  DashboardCardContainerHeaderTitle,
  TitleWrapper,
  ActionButtons,
  Description
} from "./DashboardCard.styles";

const DashboardCardSkeleton = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 3, display: "flex", flexDirection: "column" }}>
      <DashboardCardContainerHeader>
        <DashboardCardContainerHeaderTitle>
          <TitleWrapper>
            <Skeleton
              variant="circular"
              width={48}
              height={48}
              sx={{ flexShrink: 0 }}
            />
            <Skeleton
              variant="text"
              width={200}
              height={40}
              sx={{ ml: 1 }}
            />
          </TitleWrapper>
          <ActionButtons>
            {/* Action buttons skeleton */}
            <Stack direction="row" spacing={1}>
              <Skeleton variant="rounded" width={150} height={36} />
              <Skeleton variant="rounded" width={200} height={36} />
            </Stack>
          </ActionButtons>
        </DashboardCardContainerHeaderTitle>
        {/* Description skeletons */}
        <Stack width="100%" spacing={1}>
          <Description>
            <Skeleton variant="text" width="90%" height={24} />
          </Description>
          <Description>
            <Skeleton variant="text" width="75%" height={24} />
          </Description>
        </Stack>
      </DashboardCardContainerHeader>
      <Box sx={{ padding: 0, flex: "1 1" }}>
        <CardContent sx={{ position: "relative", height: "100%", padding: "24px 0" }}>
          <Stack spacing={2} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Skeleton variant="rectangular" width="100%" sx={{ flexGrow: 1 }} />
            <Skeleton variant="rectangular" width="100%" sx={{ flexGrow: 1 }} />
          </Stack>
        </CardContent>
      </Box>
    </Box>
  );
};

export default DashboardCardSkeleton;