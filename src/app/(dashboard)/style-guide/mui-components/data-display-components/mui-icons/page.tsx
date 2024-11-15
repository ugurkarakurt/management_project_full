"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import MuiIcons from '@/components/dashboard/mui-components/data-display-components/mui-icons/MuiIcons';

const MuiIconsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Mui Icons"
        description={[""]}>
        <PageBox>
          <MuiIcons />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default MuiIconsPage;
