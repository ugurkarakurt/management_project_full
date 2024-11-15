"use client"
import React from 'react';
import { PageBox } from './page.styles';
import { DashboardContainer } from '@/containers/dashboard/Dashboard.container';
import DashboardCard from '@/components/dashboard/shared/DashboardCard/DashboardCard';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileForm } from '@/components/profile/ProfileForm';

const ProfilePage = () => {
  return (
    <DashboardContainer>
      <DashboardCard title="Profile"
        description={["..."]}>
        <PageBox>
          <ProfileHeader />
          <ProfileForm />
        </PageBox>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default ProfilePage;
