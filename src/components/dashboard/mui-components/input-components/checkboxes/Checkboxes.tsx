import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicCheckboxes from './Examples/BasicChecbox';
import CheckboxLabels from './Examples/Label';
import SizeCheckboxes from './Examples/Size';
import ColorCheckboxes from './Examples/Color';
import IconCheckboxes from './Examples/Icon';
import ControlledCheckbox from './Examples/Controlled';
import IndeterminateCheckbox from './Examples/Indeterminate';
import CheckboxesGroup from './Examples/FormGroup';
import FormControlLabelPosition from './Examples/LabelPlacement';
import CustomizedCheckbox from './Examples/Customization';


const Checkboxes = () => {


  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic button</FormGroupTitle>
          <InputWrapper>
            <BasicCheckboxes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Label</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can provide a label to the <CodeTag>Checkbox</CodeTag> thanks to the <CodeTag>FormControlLabel</CodeTag> component.</InputWrapperDescription>
          <InputWrapper>
            <CheckboxLabels />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Size</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Use the <CodeTag>size</CodeTag> prop or customize the font size of the svg icons to change the size of the checkboxes.</InputWrapperDescription>
          <InputWrapper>
            <SizeCheckboxes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Color</FormGroupTitle>
          <InputWrapper>
            <ColorCheckboxes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Icon</FormGroupTitle>
          <InputWrapper>
            <IconCheckboxes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Controlled</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can control the checkbox with the <CodeTag>checked</CodeTag> and <CodeTag>onChange</CodeTag> props:</InputWrapperDescription>
          <InputWrapper>
            <ControlledCheckbox />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Indeterminate</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or doesn&apos;t. Visually, there are <b>three</b> states a checkbox can be in: checked, unchecked, or indeterminate.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>You can change the indeterminate icon using the <CodeTag>indeterminateIcon</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <IndeterminateCheckbox />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>FormGroup</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><CodeTag>FormGroup</CodeTag> is a helpful wrapper used to group selection control components.</InputWrapperDescription>
          <InputWrapper>
            <CheckboxesGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Label placement</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can change the placement of the label:</InputWrapperDescription>
          <InputWrapper>
            <FormControlLabelPosition />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Here is an example of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>
            overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedCheckbox />
          </InputWrapper>
          <InputWrapperDescription mt={3}>🎨 If you are looking for inspiration, you can check <FormLink href='https://mui-treasury.com/?path=/docs/button-introduction--docs' target='_blank'>MUI Treasury&apos;s customization examples</FormLink>.</InputWrapperDescription>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Checkboxes;