// src/app/(auth)/reset-password/page.tsx
"use client";
import { DashboardContainer } from "@/containers/dashboard/Dashboard.container";
import { ResetPasswordContainer } from "@/containers/auth/reset-password/ResetPassword.container";
import { redirect } from 'next/navigation';
import { Logo } from "react-mui-sidebar";
import {
  PageContainerBox,
  GridContainer,
  GridItem,
  CardContainer,
  LogoContainer
} from "./page.styles";

const ResetPasswordPage = ({ searchParams, }: { searchParams: { token: string }; }) => {

  if (!searchParams.token) {
    redirect('/login');
  }

  return (
    <DashboardContainer>
      <PageContainerBox>
        <GridContainer container>
          <GridItem item xs={12} sm={12} lg={12} xl={12}>
            <CardContainer >
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <ResetPasswordContainer token={searchParams.token} />
            </CardContainer>
          </GridItem>
        </GridContainer>
      </PageContainerBox>
    </DashboardContainer>
  );
};

export default ResetPasswordPage;