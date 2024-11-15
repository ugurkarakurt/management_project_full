"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Switches from '@/components/dashboard/mui-components/input-components/switches/Switches';

const SwitchesPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Switches" description={[
        "Switches toggle the state of a single setting on or off.",
        "Switches are the preferred way to adjust settings on mobile.",
        "The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label."
      ]}>
        <PageBox>
          <Switches />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default SwitchesPage;
