import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import RadioButtonsGroup from './Examples/RadioGroup';
import RowRadioButtonsGroup from './Examples/Direction';
import ControlledRadioButtonsGroup from './Examples/Controlled';
import RadioButtons from './Examples/StandaloneRadioButton';
import SizeRadioButtons from './Examples/Size';
import ColorRadioButtons from './Examples/Color';
import FormControlLabelPlacement from './Examples/LabelPlacement';
import ErrorRadios from './Examples/ShowError';
import CustomizedRadios from './Examples/Customization';
import UseRadioGroup from './Examples/UseRadioGroup';

const RadioGroups = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic Radio group</FormGroupTitle>
          <InputWrapperDescription><CodeTag>RadioGroup</CodeTag> is a helpful wrapper used to group <CodeTag>Radio</CodeTag> components that provides an easier API, and proper keyboard accessibility to the group.</InputWrapperDescription>
          <InputWrapper>
            <RadioButtonsGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Direction</FormGroupTitle>
          <InputWrapperDescription>To lay out the buttons horizontally, set the <CodeTag>row</CodeTag> prop:</InputWrapperDescription>
          <InputWrapper>
            <RowRadioButtonsGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Controlled</FormGroupTitle>
          <InputWrapperDescription>You can control the radio with the <CodeTag>value</CodeTag> and <CodeTag>onChange</CodeTag> props:</InputWrapperDescription>
          <InputWrapper>
            <ControlledRadioButtonsGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Standalone radio buttons</FormGroupTitle>
          <InputWrapperDescription><CodeTag>Radio</CodeTag> can also be used standalone, without the RadioGroup wrapper.</InputWrapperDescription>
          <InputWrapper>
            <RadioButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Size</FormGroupTitle>
          <InputWrapperDescription>Use the <CodeTag>size</CodeTag> prop or customize the font size of the svg icons to change the size of the radios.</InputWrapperDescription>
          <InputWrapper>
            <SizeRadioButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Color</FormGroupTitle>
          <InputWrapper>
            <ColorRadioButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Label placement</FormGroupTitle>
          <InputWrapperDescription>You can change the placement of the label with the <CodeTag>FormControlLabel</CodeTag> component&apos;s <CodeTag>labelPlacement</CodeTag> prop:</InputWrapperDescription>
          <InputWrapper>
            <FormControlLabelPlacement />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Show error</FormGroupTitle>
          <InputWrapperDescription>In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:</InputWrapperDescription>
          <InputWrapper>
            <ErrorRadios />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription>Here is an example of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedRadios />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>useRadioGroup</FormGroupTitle>
          <InputWrapperDescription>For advanced customization use cases, a <CodeTag>useRadioGroup()</CodeTag> hook is exposed. It returns the context value of the parent radio group. The Radio component uses this hook internally.</InputWrapperDescription>
          <InputWrapper>
            <UseRadioGroup />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer >
  );
}

export default RadioGroups;