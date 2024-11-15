"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Sliders from '@/components/dashboard/mui-components/input-components/sliders/Sliders';

const SlidersPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Sliders" description={[
        "Sliders allow users to make selections from a range of values.",
        "Sliders reflect a range of values along a bar, from which users may select a single value.",
        "They are ideal for adjusting settings such as volume, brightness, or applying image filters."
      ]}>
        <PageBox>
          <Sliders />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default SlidersPage;
