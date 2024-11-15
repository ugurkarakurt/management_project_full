import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, FormLink, InputWrapper, InputWrapperDescription } from '../DataDisplayComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicChips from './Examples/BasicChip';
import ClickableChips from './Examples/ChipAction';
import DeletableChips from './Examples/Deletable';
import ClickableAndDeletableChips from './Examples/ClickableAndDeletable';
import ClickableLinkChips from './Examples/Clickable';
import CustomDeleteIconChips from './Examples/CustomDeleteIcon';
import AvatarChips from './Examples/AvatarChip';
import IconChips from './Examples/IconChip';
import ColorChips from './Examples/ColorChip';
import SizesChips from './Examples/SizeChip';
import MultilineChips from './Examples/MultilineChip';
import ChipsArray from './Examples/ChipArray';

const Chips = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Basic chip</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>Chip</CodeTag> component supports outlined and filled styling.</InputWrapperDescription>
          <InputWrapper>
            <BasicChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Chip actions</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can use the following actions.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>Chips with the <CodeTag>onClick</CodeTag> prop defined change appearance on focus, hover, and click.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>Chips with the <CodeTag>onDelete</CodeTag> prop defined will display a delete icon which changes appearance on hover.</InputWrapperDescription>
          <InputWrapper>
            <ClickableChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Deletable</FormGroupTitle>
          <InputWrapper>
            <DeletableChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Clickable and deletable</FormGroupTitle>
          <InputWrapper>
            <ClickableAndDeletableChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Clickable link</FormGroupTitle>
          <InputWrapper>
            <ClickableLinkChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Custom delete icon</FormGroupTitle>
          <InputWrapper>
            <CustomDeleteIconChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Chip adornments</FormGroupTitle>
          <InputWrapperDescription>You can add ornaments to the beginning of the component.</InputWrapperDescription>
          <InputWrapperDescription>Use the <CodeTag>avatar</CodeTag> prop to add an avatar or use the <CodeTag>icon</CodeTag> prop to add an icon.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Avatar chip</FormGroupTitle>
          <InputWrapper>
            <AvatarChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Icon chip</FormGroupTitle>
          <InputWrapper>
            <IconChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Color chip</FormGroupTitle>
          <InputWrapperDescription>You can use the <CodeTag>color</CodeTag> prop to define a color from theme palette.</InputWrapperDescription>
          <InputWrapper>
            <ColorChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Sizes chip</FormGroupTitle>
          <InputWrapperDescription>You can use the <CodeTag>size</CodeTag> prop to define a small Chip.</InputWrapperDescription>
          <InputWrapper>
            <SizesChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Multiline chip</FormGroupTitle>
          <InputWrapperDescription>By default, Chips displays labels only in a single line. To have them support multiline content, use the <CodeTag>sx</CodeTag> prop to add <CodeTag>height:auto</CodeTag> to the Chip component, and <CodeTag>whiteSpace: normal</CodeTag> to the <CodeTag>label</CodeTag> styles.</InputWrapperDescription>
          <InputWrapper>
            <MultilineChips />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>ChipsArray</FormGroupTitle>
          <InputWrapperDescription>An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no <CodeTag>onClick</CodeTag> prop is defined, the <CodeTag>Chip</CodeTag> can be focused, but does not gain depth while clicked or touched.</InputWrapperDescription>
          <InputWrapper>
            <ChipsArray />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Chips;
