"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import ToggleButtons from '@/components/dashboard/mui-components/input-components/toggle-buttons/ToggleButtons';

const BasicTextFieldPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Toggle Buttons"
        description={[
          'A Toggle Button can be used to group related options.',
          'To emphasize groups of related Toggle buttons, a group should share a common container.',
          'The "ToggleButtonGroup" controls the selected state of its child buttons when given its own "value" prop.'
        ]}>
        <PageBox>
          <ToggleButtons />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default BasicTextFieldPage;
