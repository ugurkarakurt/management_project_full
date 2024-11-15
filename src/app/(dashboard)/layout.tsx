"use client";
import React, { useState } from "react";
import { useDashboardCardAction } from "@/context/DashboardCardAction.context";
import { LayoutProps } from "./dashboard.types";
import Header from "@/components/layout/header/Header";
import {
  MainWrapper,
  PageWrapper,
  ContentContainer,
  PageContent
} from "./dashboard.styles";
import MSidebar from "@/components/layout/sidebar/Sidebar";

const RootLayout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { device } = useDashboardCardAction();

  const handleMobileSidebarToggle = () => setMobileSidebarOpen(true);
  const handleSidebarClose = () => setMobileSidebarOpen(false);

  return (
    <MainWrapper>
      <MSidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={handleSidebarClose}
      />
      <PageWrapper>
        <Header toggleMobileSidebar={handleMobileSidebarToggle} />
        <ContentContainer maxWidth={device || "lg"}>
          <PageContent>{children}</PageContent>
        </ContentContainer>
      </PageWrapper>
    </MainWrapper>
  );
};

export default RootLayout;