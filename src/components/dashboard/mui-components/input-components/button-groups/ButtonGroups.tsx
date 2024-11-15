import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicButtonGroup from './Examples/ButtonGroup';
import VariantButtonGroup from './Examples/ButtonVariant';
import GroupSizesColors from './Examples/SizeAndColor';
import GroupOrientation from './Examples/VerticalGroup';
import SplitButton from './Examples/SplitButton';
import DisableElevation from './Examples/DisabledElevation';
import LoadingButtonGroup from './Examples/LoadingButton';

const ButtonGroups = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic button group</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The buttons can be grouped by wrapping them with the <CodeTag>ButtonGroup</CodeTag> component. They need to be immediate children.</InputWrapperDescription>
          <InputWrapper>
            <BasicButtonGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Button variants</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>All the standard button variants are supported.</InputWrapperDescription>
          <InputWrapper>
            <VariantButtonGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Sizes and colors</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>size</CodeTag> and <CodeTag>color</CodeTag> props can be used to control the appearance of the button group.</InputWrapperDescription>
          <InputWrapper>
            <GroupSizesColors />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Vertical group</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The button group can be displayed vertically using the <CodeTag>orientation</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <GroupOrientation />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Split button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><CodeTag>ButtonGroup</CodeTag> can also be used to create a split button. The dropdown can change the button action (as in this example) or be used to immediately trigger a related action.</InputWrapperDescription>
          <InputWrapper>
            <SplitButton />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Disabled elevation</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can remove the elevation with the <CodeTag>disableElevation</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <DisableElevation />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Loading button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can use the <CodeTag><FormLink href='https://mui.com/material-ui/react-button/#loading-button' target='_blank'>&lt;LoadingButton/&gt;</FormLink></CodeTag> from <CodeTag><FormLink href='https://mui.com/material-ui/about-the-lab/' target='_blank'>@mui/lab</FormLink></CodeTag> in the button group.</InputWrapperDescription>
          <InputWrapper>
            <LoadingButtonGroup />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default ButtonGroups;