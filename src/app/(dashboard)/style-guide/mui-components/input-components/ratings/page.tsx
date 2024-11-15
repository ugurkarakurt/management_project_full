"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import Ratings from '@/components/dashboard/mui-components/input-components/ratings/Ratings';

const RatingsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Ratings" description={[
        "Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own."
      ]}>
        <PageBox>
          <Ratings />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default RatingsPage;
