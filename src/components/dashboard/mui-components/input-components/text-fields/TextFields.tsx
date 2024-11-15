import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicTextFields from './examples/BasicTextField';
import FormPropsTextFields from './examples/FormProps';
import ValidationTextFields from './examples/Validation';
import MultilineTextFields from './examples/Multiline';
import SelectTextFields from './examples/Select';
import InputWithIcon from './examples/Icons';
import InputAdornments from './examples/InputAdorments';
import TextFieldSizes from './examples/Sizes';
import TextFieldHiddenLabel from './examples/Filled';
import LayoutTextFields from './examples/Margin';
import FullWidthTextField from './examples/FullWidth';
import StateTextFields from './examples/Controlled';
import ComposedTextField from './examples/Component';
import Inputs from './examples/Inputs';
import ColorTextFields from './examples/Color';
import CustomizedInputsStyled from './examples/Customization';
import CustomizedInputsStyleOverrides from './examples/ThemeOverride';
import CustomizedInputBase from './examples/SearchMap';
import HelperTextMisaligned from './examples/HelperText';
import HelperTextAligned from './examples/HelperTextAligned';

const TextFields = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Basic Text Field</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>TextField</CodeTag> wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.</InputWrapperDescription>
          <InputWrapper>
            <BasicTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Form props</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Standard form attributes are supported, for example <CodeTag>required</CodeTag>, <CodeTag>disabled</CodeTag>, <CodeTag>type</CodeTag>, etc. as well as a <CodeTag>helperText</CodeTag> which is used to give context about a field&apos;s input, such as how the input will be used.</InputWrapperDescription>
          <InputWrapper>
            <FormPropsTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Validation</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>error</CodeTag> prop toggles the error state. The <CodeTag>helperText</CodeTag> prop can then be used to provide feedback to the user about the error.</InputWrapperDescription>
          <InputWrapper>
            <ValidationTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Multiline</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>multiline</CodeTag> prop transforms the text field into a <FormLink href="https://mui.com/material-ui/react-textarea-autosize/" target="_blank">TextareaAutosize</FormLink>  element. Unless the <CodeTag>rows</CodeTag> prop is set, the height of the text field dynamically matches its content (using <FormLink href='https://mui.com/material-ui/react-textarea-autosize/' target="_blank">TextareaAutosize</FormLink>). You can use the <CodeTag>minRows</CodeTag> and <CodeTag>maxRows</CodeTag> props to bound it.</InputWrapperDescription>
          <InputWrapper>
            <MultilineTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Select</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>select</CodeTag> prop makes the text field use the <FormLink href="https://mui.com/material-ui/react-select/" target="_blank">Select</FormLink> component internally.</InputWrapperDescription>
          <InputWrapper>
            <SelectTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Icons</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>There are multiple ways to display an icon with a text field.</InputWrapperDescription>
          <InputWrapper>
            <InputWithIcon />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Input Adornments</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The main way is with an <CodeTag>InputAdornment</CodeTag>. This can be used to add a prefix, a suffix, or an action to an input. For instance, you can use an icon button to hide or reveal the password.</InputWrapperDescription>
          <InputWrapper>
            <InputAdornments />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Sizes</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Fancy smaller inputs? Use the <CodeTag>size</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <TextFieldSizes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>The <CodeTag>filled</CodeTag> variant input height can be further reduced by rendering the label outside of it.</InputWrapperDescription>
          <InputWrapper>
            <TextFieldHiddenLabel />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Margin</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>margin</CodeTag> prop can be used to alter the vertical spacing of the text field. Using <CodeTag>none</CodeTag> (default) doesn&apos;t apply margins to the <CodeTag>FormControl</CodeTag> whereas <CodeTag>dense</CodeTag> and <CodeTag>normal</CodeTag> do.</InputWrapperDescription>
          <InputWrapper>
            <LayoutTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Full width</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><CodeTag>fullWidth</CodeTag> can be used to make the input take up the full width of its container.</InputWrapperDescription>
          <InputWrapper>
            <FullWidthTextField />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Uncontrolled vs. Controlled</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The component can be controlled or uncontrolled.</InputWrapperDescription>
          <InputWrapper>
            <StateTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Components</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>TextField is composed of smaller components (
            <CodeTag><FormLink href='https://mui.com/material-ui/api/form-control/' target="_blank">FormControl</FormLink></CodeTag>,
            <CodeTag><FormLink href='https://mui.com/material-ui/api/input/' target="_blank">Input</FormLink></CodeTag>,
            <CodeTag><FormLink href='https://mui.com/material-ui/api/filled-input/' target="_blank">FilledInput</FormLink></CodeTag>,
            <CodeTag><FormLink href='https://mui.com/material-ui/api/input-label/' target="_blank">InputLabel</FormLink></CodeTag>,
            <CodeTag><FormLink href='https://mui.com/material-ui/api/outlined-input/' target="_blank">OutlinedInput</FormLink></CodeTag>, and
            <CodeTag><FormLink href='https://mui.com/material-ui/api/form-helper-text/' target="_blank">FormHelperText</FormLink></CodeTag> )
            that you can leverage directly to significantly customize your form inputs.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>You might also have noticed that some native HTML input properties are missing from the TextField component. This is on purpose. The component takes care of the most used properties. Then, it&apos;s up to the user to use the underlying component shown in the following demo. Still, you can use <CodeTag>inputProps</CodeTag> (and <CodeTag>InputProps</CodeTag>, <CodeTag>InputLabelProps</CodeTag> properties) if you want to avoid some boilerplate.</InputWrapperDescription>
          <InputWrapper>
            <ComposedTextField />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Inputs</FormGroupTitle>
          <InputWrapper>
            <Inputs />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Color</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>color</CodeTag> prop changes the highlight color of the text field when focused.</InputWrapperDescription>
          <InputWrapper>
            <ColorTextFields />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Customization</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Here are some examples of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target="_blank">overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapperDescription variant='h6'>Using the styled API</InputWrapperDescription>
          <InputWrapper>
            <CustomizedInputsStyled />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='h6'>Using the theme style overrides API</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>Use the <CodeTag>styleOverrides</CodeTag> key to change any style injected by Material UI into the DOM. See the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target="_blank">theme style overrides</FormLink> documentation for further details.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedInputsStyleOverrides />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>Customization does not stop at CSS. You can use composition to build custom components and give your app a unique feel. Below is an example using the<CodeTag><FormLink href='https://mui.com/material-ui/api/input-base/' target="_blank">InputBase</FormLink></CodeTag> component, inspired by Google Maps.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedInputBase />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Helper text</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The helper text prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights. For example:</InputWrapperDescription>
          <InputWrapper>
            <HelperTextMisaligned />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>This can be fixed by passing a space character to the <CodeTag>helperText</CodeTag> prop:</InputWrapperDescription>
          <InputWrapper>
            <HelperTextAligned />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default TextFields;