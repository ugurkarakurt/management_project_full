import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, FormLink, InputWrapper, InputWrapperDescription } from '../DataDisplayComponents.styles';
import { CodeTag } from '@/app/global.styles';
import IntroDivider from './Examples/Introduction';
import DividerVariants from './Examples/Variants';
import VerticalDividers from './Examples/Orientation';
import FlexDivider from './Examples/FlexItem';
import DividerText from './Examples/WithChildren';
import ListDividers from './Examples/UseWithAList';
import VerticalDividerMiddle from './Examples/IconGrouping';

const Dividers = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Introduction</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The Material UI Divider component renders as a dark gray <CodeTag>&lt;hr&gt;</CodeTag> by default, and features several useful props for quick style adjustments.</InputWrapperDescription>
          <InputWrapper>
            <IntroDivider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Variants</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The Divider component supports three variants: <CodeTag>fullWidth</CodeTag> (default), <CodeTag>inset</CodeTag>, and <CodeTag>middle</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <DividerVariants />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Orientation</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Use the orientation prop to change the Divider from horizontal to vertical. When using vertical orientation, the Divider renders a <CodeTag>&lt;div&gt;</CodeTag> with the corresponding accessibility attributes instead of <CodeTag>&lt;hr&gt;</CodeTag> to adhere to the WAI-ARIA <FormLink href='https://www.w3.org/TR/wai-aria-1.2/#separator' target='_blank'>spec</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <VerticalDividers />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Flex item</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Use the <CodeTag>flexItem</CodeTag> prop to display the Divider when it&apos;s being used in a flex container.</InputWrapperDescription>
          <InputWrapper>
            <FlexDivider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>With children</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Use the <CodeTag>textAlign</CodeTag> prop to align elements that are wrapped by the Divider.</InputWrapperDescription>
          <InputWrapper>
            <DividerText />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Use with a List</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>When using the Divider to separate items in a List, use the <CodeTag>component</CodeTag> prop to render it as an <CodeTag>&lt;li&gt;</CodeTag>—otherwise it won&apos;t be a valid HTML element.</InputWrapperDescription>
          <InputWrapper>
            <ListDividers />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Icon grouping</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The demo below shows how to combine the props <CodeTag>variant=&quot;middle&quot;</CodeTag> and <CodeTag>orientation=&quot;vertical&quot;</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <VerticalDividerMiddle />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Dividers;
