import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicButtons from './Examples/BasicButton';
import TextButtons from './Examples/TextButton';
import ContainedButtons from './Examples/ContainedButton';
import DisableElevation from './Examples/DisabledElevation';
import OutlinedButtons from './Examples/OutlinedButton';
import ColorButtons from './Examples/ColorButton';
import ButtonSizes from './Examples/SizeButton';
import IconLabelButtons from './Examples/ButtonWithIconLabel';
import IconButtons from './Examples/IconButton';
import IconButtonSizes from './Examples/IconButtonSize';
import IconButtonColors from './Examples/IconButtonColor';
import InputFileUpload from './Examples/FileUpload';
import CustomizedButtons from './Examples/Customization';
import ButtonBaseDemo from './Examples/ComplexButton';
import LoadingButtons from './Examples/LoadingButton';
import LoadingButtonsTransition from './Examples/LoadingWithToggle';


const Buttons = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>Button</CodeTag> comes with three variants: text (default), contained, and outlined.</InputWrapperDescription>
          <InputWrapper>
            <BasicButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Text button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><FormLink href='https://m2.material.io/components/buttons#text-button' target='_blank'>Text buttons</FormLink> are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content.</InputWrapperDescription>
          <InputWrapper>
            <TextButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Contained button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><FormLink href='https://m2.material.io/components/buttons#contained-button' target='_blank'>Contained buttons</FormLink> are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.</InputWrapperDescription>
          <InputWrapper>
            <ContainedButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>You can remove the elevation with the <CodeTag>disableElevation</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <DisableElevation />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Outlined button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><FormLink href='https://m2.material.io/components/buttons#outlined-button' target='_blank'>Outlined buttons</FormLink> are medium-emphasis buttons. They contain actions that are important but aren&apos;t the primary action in an app.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.</InputWrapperDescription>
          <InputWrapper>
            <OutlinedButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Color</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>In addition to using the default button colors, you can add custom ones, or disable any you don&apos;t need. See the <FormLink href='https://mui.com/material-ui/customization/palette/#custom-colors' target='_blank'>Adding new colors</FormLink> examples for more info.</InputWrapperDescription>
          <InputWrapper>
            <ColorButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Sizes</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>For larger or smaller buttons, use the <CodeTag>size</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <ButtonSizes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Buttons with icons and label</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.</InputWrapperDescription>
          <InputWrapper>
            <IconLabelButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Icon button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Icon buttons are commonly found in app bars and toolbars.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.</InputWrapperDescription>
          <InputWrapper>
            <IconButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Icon Button Sizes</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>For larger or smaller icon buttons, use the <CodeTag>size</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <IconButtonSizes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Icon button colors</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Use <CodeTag>color</CodeTag> prop to apply theme color palette to component.</InputWrapperDescription>
          <InputWrapper>
            <IconButtonColors />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>File upload</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>To create a file upload button, turn the button into a label using <CodeTag>component=&quot;label&quot;</CodeTag> and then create a visually-hidden input with type <CodeTag>file</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <InputFileUpload />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Here are some examples of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedButtons />
          </InputWrapper>
          <InputWrapperDescription mt={3}>🎨 If you are looking for inspiration, you can check <FormLink href='https://mui-treasury.com/?path=/docs/button-introduction--docs' target='_blank'>MUI Treasury&apos;s customization examples</FormLink>.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Complex button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the <CodeTag>ButtonBase</CodeTag>. You can take advantage of this lower-level component to build custom interactions.</InputWrapperDescription>
          <InputWrapper>
            <ButtonBaseDemo />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Loading button</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><CodeTag><FormLink href='https://mui.com/material-ui/about-the-lab/' target='_blank'>@mui/lab</FormLink></CodeTag> offers loading buttons that can show loading state and disable interactions.</InputWrapperDescription>
          <InputWrapper>
            <LoadingButtons />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>Toggle the loading switch to see the transition between the different states.</InputWrapperDescription>
          <InputWrapper>
            <LoadingButtonsTransition />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer >
  );
}

export default Buttons;