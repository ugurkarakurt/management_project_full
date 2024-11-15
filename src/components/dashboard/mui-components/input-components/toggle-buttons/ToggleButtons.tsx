import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicToggleButtons from './Examples/ExclusiveSelection';
import ToggleButtonsMultiple from './Examples/MultipleSelection';
import ToggleButtonSizes from './Examples/Size';
import ColorToggleButton from './Examples/Color';
import VerticalToggleButtons from './Examples/VerticalButtons';
import ToggleButtonNotEmpty from './Examples/EnforceValueSet';
import StandaloneToggleButton from './Examples/StandaloneToggleButton';
import CustomizedDividers from './Examples/Customization';



const ToggleButtons = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Exclusive selection</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>With exclusive selection, selecting one option deselects any other.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'><b>Note</b>: Exclusive selection does not enforce that a button must be active. For that effect see <FormLink href='https://mui.com/material-ui/react-toggle-button/#enforce-value-set' target='_blank'>enforce value set</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <BasicToggleButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Multiple selection</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected.</InputWrapperDescription>
          <InputWrapper>
            <ToggleButtonsMultiple />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Size</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>For larger or smaller buttons, use the <CodeTag>size</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <ToggleButtonSizes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Color</FormGroupTitle>
          <InputWrapper>
            <ColorToggleButton />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Vertical buttons</FormGroupTitle>
          <InputWrapperDescription>The buttons can be stacked vertically with the <CodeTag>orientation</CodeTag> prop set to &quot;vertical&quot;.</InputWrapperDescription>
          <InputWrapper>
            <VerticalToggleButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Enforce value set</FormGroupTitle>
          <InputWrapperDescription>If you want to enforce that at least one button must be active, you can adapt your handleChange function.</InputWrapperDescription>
          <InputWrapper>
            <ToggleButtonNotEmpty />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Standalone toggle button</FormGroupTitle>
          <InputWrapper>
            <StandaloneToggleButton />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Customization</FormGroupTitle>
          <InputWrapperDescription>Here is an example of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>
            overrides documentation page</FormLink></InputWrapperDescription>
          <InputWrapper>
            <CustomizedDividers />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default ToggleButtons;