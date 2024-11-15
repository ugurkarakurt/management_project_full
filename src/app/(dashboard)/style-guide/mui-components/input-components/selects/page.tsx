"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Selects from '@/components/dashboard/mui-components/input-components/selects/Selects';

const SelectsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Selects" description={[
        "Select components are used for collecting user provided information from a list of options."
      ]}>
        <PageBox>
          <Selects />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default SelectsPage;
