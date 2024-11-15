"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Chips from '@/components/dashboard/mui-components/data-display-components/chips/Chips';

const ChipsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Chips"
        description={["Chips are compact elements that represent an input, attribute, or action.",
          "Chips allow users to enter information, make selections, filter content, or trigger actions.",
          "While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context."
        ]}>
        <PageBox>
          <Chips />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default ChipsPage;
