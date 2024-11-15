"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import TextFields from '@/components/dashboard/mui-components/input-components/text-fields/TextFields';

const BasicTextFieldPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Text Fields"
        description={["Text Fields let users enter and edit text.", "Text fields allow users to enter text into a UI. They typically appear in forms and dialogs."]}>
        <PageBox>
          <TextFields />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default BasicTextFieldPage;
