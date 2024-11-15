"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Buttons from '@/components/dashboard/mui-components/input-components/buttons/Buttons';

const ButtonsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Buttons"
        description={["Buttons allow users to take actions, and make choices, with a single tap.",
          "Buttons communicate actions that users can take.",
          "They are typically placed throughout your UI, in places like: Modal windows, Forms, Cards, Toolbars"]}>
        <PageBox>
          <Buttons />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default ButtonsPage;
