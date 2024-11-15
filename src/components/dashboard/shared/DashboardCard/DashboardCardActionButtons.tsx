import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import TvIcon from '@mui/icons-material/Tv';
import LaptopIcon from '@mui/icons-material/Laptop';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDashboardCardAction } from '@/context/DashboardCardAction.context';
import { DashboardCardActionButtonsContainer, DashboardCardActionButtonsDeviceContainer, DashboardCardActionButtonsSelectedToggleButton } from './DashboardCard.styles';

export default function DashboardCardActionButtons() {
  const { alignment, device, handleAlignment, handleDevice } = useDashboardCardAction();

  return (
    <DashboardCardActionButtonsContainer direction="row">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="left" aria-label="left aligned">
          <FormatAlignLeftIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="center" aria-label="centered">
          <FormatAlignCenterIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="right" aria-label="right aligned">
          <FormatAlignRightIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
      </ToggleButtonGroup>

      <DashboardCardActionButtonsDeviceContainer
        value={device}
        exclusive
        onChange={handleDevice}
        aria-label="device"
      >
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="xl" aria-label="max">
          <HomeMaxIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="lg" aria-label="tv">
          <TvIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="md" aria-label="laptop">
          <LaptopIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="sm" aria-label="tablet">
          <TabletMacIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
        <DashboardCardActionButtonsSelectedToggleButton size='small' value="xs" aria-label="phone">
          <SmartphoneIcon fontSize='small' />
        </DashboardCardActionButtonsSelectedToggleButton>
      </DashboardCardActionButtonsDeviceContainer>
    </DashboardCardActionButtonsContainer>
  );
}