"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Avatars from '@/components/dashboard/mui-components/data-display-components/avatars/Avatars';

const AvatarsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Avatars"
        description={["Avatars are found throughout material design with uses in everything from tables to dialog menus."]}>
        <PageBox>
          <Avatars />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default AvatarsPage;
