"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Checkboxes from '@/components/dashboard/mui-components/input-components/checkboxes/Checkboxes';

const CheckboxesPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Checkboxes"
        description={["Checkboxes allow the user to select one or more items from a set.",
          "Checkboxes can be used to turn an option on or off.",
          "If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.",
          "If you have a single option, avoid using a checkbox and use an on/off switch instead."
        ]}>
        <PageBox>
          <Checkboxes />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default CheckboxesPage;
