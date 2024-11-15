import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicFloatingActionButtons from './Examples/BasicFAB';
import FloatingActionButtonSize from './Examples/Size';
import FloatingActionButtonExtendedSize from './Examples/SizeWithIcon';
import FloatingActionButtonZoom from './Examples/Animation';


const FloatingActionButtons = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic FAB</FormGroupTitle>
          <InputWrapper>
            <BasicFloatingActionButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Size</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>By default, the size is <CodeTag>large</CodeTag>. Use the <CodeTag>size</CodeTag> prop for smaller floating action buttons.</InputWrapperDescription>
          <InputWrapper>
            <FloatingActionButtonSize />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapper>
            <FloatingActionButtonExtendedSize />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Animation</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The floating action button animates onto the screen as an expanding piece of material, by default.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use <CodeTag>enterDelay</CodeTag> to allow the outgoing Floating Action Button&apos;s animation to finish before the new one enters.</InputWrapperDescription>
          <InputWrapper>
            <FloatingActionButtonZoom />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default FloatingActionButtons;