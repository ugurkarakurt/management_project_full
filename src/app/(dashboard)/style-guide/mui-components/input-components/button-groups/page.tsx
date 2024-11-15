"use client"
import React from 'react';
import { PageBox } from './page.styles';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import ButtonGroups from '@/components/dashboard/mui-components/input-components/button-groups/ButtonGroups';

const ButtonGroupsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Button Groups"
        description={["The ButtonGroup component can be used to group related buttons."]}>
        <PageBox>
          <ButtonGroups />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default ButtonGroupsPage;
