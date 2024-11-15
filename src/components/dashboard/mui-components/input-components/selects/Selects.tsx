import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';

import SelectVariants from './Examples/FilledAndStandardVariants';
import BasicSelect from './Examples/BasicSelect';
import SelectLabels from './Examples/LabelsAndHelperText';
import SelectAutoWidth from './Examples/AutoWidth';
import SelectSmall from './Examples/SmallSize';
import SelectOtherProps from './Examples/OtherProps';
import NativeSelectDemo from './Examples/NativeSelect';
import CustomizedSelects from './Examples/Customization';
import MultipleSelect from './Examples/Default';
import MultipleSelectCheckmarks from './Examples/Checkmarks';
import MultipleSelectChip from './Examples/Chip';
import MultipleSelectPlaceholder from './Examples/Placeholder';
import MultipleSelectNative from './Examples/Native';
import ControlledOpenSelect from './Examples/Controlling';
import DialogSelect from './Examples/WithADialog';
import GroupedSelect from './Examples/Grouping';


const Selects = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic select</FormGroupTitle>
          <InputWrapperDescription>Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport.</InputWrapperDescription>
          <InputWrapper>
            <BasicSelect />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Advanced features</FormGroupTitle>
          <InputWrapperDescription>The Select component is meant to be interchangeable with a native <CodeTag>&lt;select&gt;</CodeTag> element.</InputWrapperDescription>
          <InputWrapperDescription>If you are looking for more advanced features, like combobox, multiselect, autocomplete, async or creatable support, head to the <FormLink href='https://mui.com/material-ui/react-autocomplete/' target='_blank'><CodeTag>Autocomplete</CodeTag>component</FormLink>. It&apos;s meant to be an improved version of the &quot;react-select&quot; and &quot;downshift&quot; packages.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Props</FormGroupTitle>
          <InputWrapperDescription>The Select component is implemented as a custom <CodeTag>&lt;input&gt;</CodeTag> element of the <FormLink href='https://mui.com/material-ui/api/input-base/' target='_blank'>InputBase</FormLink>. It extends the <FormLink href='https://mui.com/material-ui/react-text-field/' target='_blank'>text field components</FormLink>  subcomponents, either the <FormLink href='https://mui.com/material-ui/api/outlined-input/' target='_blank'>OutlinedInput</FormLink>, <FormLink href='https://mui.com/material-ui/api/input/' target='_blank'>Input</FormLink>, or <FormLink href='https://mui.com/material-ui/api/filled-input/' target='_blank'>FilledInput</FormLink>, depending on the variant selected. It shares the same styles and many of the same props. Refer to the respective component&apos;s API page for details.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Filled and standard variants</FormGroupTitle>
          <InputWrapper>
            <SelectVariants />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Labels and helper text</FormGroupTitle>
          <InputWrapper>
            <SelectLabels />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Auto width</FormGroupTitle>
          <InputWrapper>
            <SelectAutoWidth />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Small Size</FormGroupTitle>
          <InputWrapper>
            <SelectSmall />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Other props</FormGroupTitle>
          <InputWrapper>
            <SelectOtherProps />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Native Select</FormGroupTitle>
          <InputWrapper>
            <NativeSelectDemo />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>TextField</FormGroupTitle>
          <InputWrapperDescription>The <CodeTag>TextField</CodeTag> wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode <FormLink href='https://mui.com/material-ui/react-text-field/#select' target='_blank'>in this section</FormLink>.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription>Here are some examples of customizing the component. You can learn more about this in the<FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapperDescription>The first step is to style the <CodeTag>InputBase</CodeTag> component. Once it&apos;s styled, you can either use it directly as a text field or provide it to the select <CodeTag>input</CodeTag> prop to have a <CodeTag>select</CodeTag> field. Notice that the <CodeTag>&quot;standard&quot;</CodeTag> variant is easier to customize, since it does not wrap the contents in a <CodeTag>fieldset/legend</CodeTag> markup.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedSelects />
          </InputWrapper>
          <InputWrapperDescription mt={3}>🎨 If you are looking for inspiration, you can check <FormLink href='https://mui-treasury.com/?path=/docs/button-introduction--docs' target='_blank'>MUI Treasury`s customization examples</FormLink>.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Multiple select</FormGroupTitle>
          <InputWrapperDescription>The <CodeTag>Select</CodeTag> component can handle multiple selections. It&apos;s enabled with the <CodeTag>multiple</CodeTag> prop.</InputWrapperDescription>
          <InputWrapperDescription>Like with the single selection, you can pull out the new value by accessing <CodeTag>event.target.value</CodeTag> in the <CodeTag>onChange</CodeTag> callback. It&apos;s always an array.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Default</FormGroupTitle>
          <InputWrapper>
            <MultipleSelect />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Checkmarks</FormGroupTitle>
          <InputWrapper>
            <MultipleSelectCheckmarks />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Chip</FormGroupTitle>
          <InputWrapper>
            <MultipleSelectChip />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Placeholder</FormGroupTitle>
          <InputWrapper>
            <MultipleSelectPlaceholder />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Native</FormGroupTitle>
          <InputWrapper>
            <MultipleSelectNative />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Controlling the open state</FormGroupTitle>
          <InputWrapperDescription>You can control the open state of the select with the <CodeTag>open</CodeTag> prop. Alternatively, it is also possible to set the initial (uncontrolled) open state of the component with the <CodeTag>defaultOpen</CodeTag> prop.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>A component is <b><u>controlled</u></b> when it&apos;s managed by its parent using props.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>A component is <b><u>uncontrolled</u></b> when it&apos;s managed by its own local state.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>Learn more about controlled and uncontrolled components in the <FormLink href='https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components' target='_blank'>React documentation</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <ControlledOpenSelect />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>With a dialog</FormGroupTitle>
          <InputWrapperDescription>While it&apos;s discouraged by the Material Design guidelines, you can use a select inside a dialog.</InputWrapperDescription>
          <InputWrapper>
            <DialogSelect />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Grouping</FormGroupTitle>
          <InputWrapperDescription>Display categories with the <CodeTag>ListSubheader</CodeTag> component or the native <CodeTag>&lt;optgroup&gt;</CodeTag> element.</InputWrapperDescription>
          <InputWrapper>
            <GroupedSelect />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Selects;