"use client"
import React from 'react';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { PageBox } from './page.styles';
import TransferLists from '@/components/dashboard/mui-components/input-components/transfer-lists/TransferLists';

const BasicTextFieldPage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Transfer List"
        description={['A Transfer List (or "shuttle") enables the user to move one or more list items between lists.']}>
        <PageBox>
          <TransferLists />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default BasicTextFieldPage;
