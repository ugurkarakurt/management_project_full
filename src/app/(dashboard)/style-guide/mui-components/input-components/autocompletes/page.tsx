"use client"
import React from 'react';
import { PageBox } from './page.styles';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import BasicAutocomplete from '@/components/dashboard/mui-components/input-components/autocompletes/Autocompletes';

const AutoCompletePage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Autocompletes"
        description={["The autocomplete is a normal text input enhanced by a panel of suggested options."]}>
        <PageBox>
          <BasicAutocomplete />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default AutoCompletePage;
