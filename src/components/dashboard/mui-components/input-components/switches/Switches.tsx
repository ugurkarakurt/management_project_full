import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicSwitches from './Examples/BasicSwitch';
import SwitchLabels from './Examples/Label';
import SwitchesSize from './Examples/Size';
import ColorSwitches from './Examples/Color';
import ControlledSwitches from './Examples/Controlled';
import SwitchesGroup from './Examples/SwitchesWithFormGroup';
import CustomizedSwitches from './Examples/Customization';
import FormControlLabelPosition from './Examples/LabelPlacement';

const Switches = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic switches</FormGroupTitle>
          <InputWrapper>
            <BasicSwitches />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Label</FormGroupTitle>
          <InputWrapperDescription>You can provide a label to the <CodeTag>Switch</CodeTag> thanks to the <CodeTag>FormControlLabel</CodeTag> component.</InputWrapperDescription>
          <InputWrapper>
            <SwitchLabels />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Size</FormGroupTitle>
          <InputWrapperDescription>Use the <CodeTag>size</CodeTag> prop to change the size of the switch.</InputWrapperDescription>
          <InputWrapper>
            <SwitchesSize />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Color</FormGroupTitle>
          <InputWrapper>
            <ColorSwitches />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Switches with FormGroup</FormGroupTitle>
          <InputWrapperDescription><CodeTag>FormGroup</CodeTag> is a helpful wrapper used to group selection controls components that provides an easier API. However, you are encouraged to use <FormLink href='https://mui.com/material-ui/react-checkbox/' target='_blank'>Checkboxes</FormLink> instead if multiple related controls are required. (See: <FormLink href='https://mui.com/material-ui/react-switch/#when-to-use' target='_blank'>When to use</FormLink>).</InputWrapperDescription>
          <InputWrapper>
            <SwitchesGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription>Here are some examples of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedSwitches />
          </InputWrapper>
          <InputWrapperDescription mt={3}>🎨 If you are looking for inspiration, you can check <FormLink href='https://mui-treasury.com/?path=/docs/button-introduction--docs' target='_blank'>MUI Treasury&apos;s customization examples</FormLink>.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Label placement</FormGroupTitle>
          <InputWrapperDescription>You can change the placement of the label:</InputWrapperDescription>
          <InputWrapper>
            <FormControlLabelPosition />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Switches;