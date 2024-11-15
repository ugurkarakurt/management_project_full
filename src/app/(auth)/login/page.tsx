// src/app/(auth)/login/page.tsx
"use client";
import { Logo } from "react-mui-sidebar";
import {
  CardContainer,
  GridContainer,
  GridItem,
  LogoContainer,
  PageContainerBox
} from "./page.styles";
import { LoginContainer } from "@/containers/auth/login/Login.container";
import { DashboardContainer } from "@/containers/dashboard/Dashboard.container";

const LoginPage = () => {
  return (
    <DashboardContainer>
      <PageContainerBox>
        <GridContainer container>
          <GridItem item xs={12} sm={12} lg={12} xl={12}>
            <CardContainer>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <LoginContainer />
            </CardContainer>
          </GridItem>
        </GridContainer>
      </PageContainerBox>
    </DashboardContainer>
  );
};

export default LoginPage;