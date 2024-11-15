"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import FloatingActionButtons from '@/components/dashboard/mui-components/input-components/floating-action-buttons/FloatingActionButtons';

const FloatingActionButtonsPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Floating Action Buttons"
        description={[
          "A Floating Action Button (FAB) performs the primary, or most common, action on a screen.",
          "A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center.",
          "FABs come in two types: regular, and extended.",
          "Only use a FAB if it is the most suitable way to present a screen's primary action.",
          "Only one component is recommended per screen to represent the most common action."
        ]}>
        <PageBox>
          <FloatingActionButtons />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default FloatingActionButtonsPage;
