"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Lists from '@/components/dashboard/mui-components/data-display-components/lists/Lists';

const ListsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Lists"
        description={["The Divider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy."]}>
        <PageBox>
          <Lists />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default ListsPage;
