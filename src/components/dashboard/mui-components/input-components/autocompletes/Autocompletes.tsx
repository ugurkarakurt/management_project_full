import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import ComboBox from './Examples/ComboBox';
import Playground from './Examples/PlayGround';
import CountrySelect from './Examples/CountrySelect';
import FreeSolo from './Examples/FreeSolo';
import Grouped from './Examples/Grouped';
import RenderGroup from './Examples/RenderGroup';
import DisabledOptions from './Examples/DisabledOption';
import CustomizedHook from './Examples/CustomizedHook';
import Tags from './Examples/MultipleValues';
import FixedTags from './Examples/FixedOption';
import GitHubLabel from './Examples/GithubPicker';
import AutocompleteHint from './Examples/Hints';

const BasicAutocomplete = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Combo box</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The value must be chosen from a predefined set of allowed values.</InputWrapperDescription>
          <InputWrapper>
            <ComboBox />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Playground</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Each of the following examples demonstrates one feature of the Autocomplete component.</InputWrapperDescription>
          <InputWrapper>
            <Playground />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Country select</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Choose one of the 248 countries.</InputWrapperDescription>
          <InputWrapper>
            <CountrySelect />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Free solo</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Set <CodeTag>freeSolo</CodeTag> to true so the textbox can contain any arbitrary value.</InputWrapperDescription>
          <FormGroupTitle variant='h6'>Search input</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The prop is designed to cover the primary use case of a <b>search input</b> with suggestions, for example Google search or react-autowhatever.</InputWrapperDescription>
          <InputWrapper>
            <FreeSolo />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Search input</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can group the options with the <CodeTag>groupBy</CodeTag> prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.</InputWrapperDescription>
          <InputWrapper>
            <Grouped />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>To control how the groups are rendered, provide a custom <CodeTag>renderGroup</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <RenderGroup />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Disabled options</FormGroupTitle>
          <InputWrapper>
            <DisabledOptions />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customized hook</FormGroupTitle>
          <InputWrapper>
            <CustomizedHook />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Multiple values</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Also known as tags, the user is allowed to enter more than one value.</InputWrapperDescription>
          <InputWrapper>
            <Tags />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>FixedTags</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>In the event that you need to lock certain tags so that they can&apos;t be removed, you can set the chips disabled.</InputWrapperDescription>
          <InputWrapper>
            <FixedTags />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>GitHub&apos;s picker</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>This demo reproduces GitHub&apos;s label picker:</InputWrapperDescription>
          <InputWrapper>
            <GitHubLabel />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Hint</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The following demo shows how to add a hint feature to the Autocomplete:</InputWrapperDescription>
          <InputWrapper>
            <AutocompleteHint />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default BasicAutocomplete;
