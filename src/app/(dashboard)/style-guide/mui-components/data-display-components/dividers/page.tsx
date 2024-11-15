"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Dividers from '@/components/dashboard/mui-components/data-display-components/dividers/Dividers';

const DividersPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Dividers"
        description={["The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."]}>
        <PageBox>
          <Dividers />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default DividersPage;
