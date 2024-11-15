"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Badges from '@/components/dashboard/mui-components/data-display-components/badges/Badges';

const BadgesPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Badges"
        description={["Badge generates a small badge to the top-right of its child(ren)."]}>
        <PageBox>
          <Badges />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default BadgesPage;
