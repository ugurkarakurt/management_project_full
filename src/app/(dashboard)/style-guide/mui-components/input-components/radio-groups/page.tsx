"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import RadioGroups from '@/components/dashboard/mui-components/input-components/radio-groups/RadioGroups';

const RadioGroupsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Radio Groups"
        description={[
          "The Radio Group allows the user to select one option from a set.",
          "Use radio buttons when the user needs to see all available options.",
          "If available options can be collapsed, consider using a 'Select component' because it uses less space.",
          "Radio buttons should have the most commonly used option selected by default.",
        ]}>
        <PageBox>
          <RadioGroups />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default RadioGroupsPage;
