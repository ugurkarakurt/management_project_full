import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import TransferList from './Examples/BasicTransferList';
import SelectAllTransferList from './Examples/EnhancedTransferList';


const TransferLists = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Basic transfer list</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>For completeness, this example includes buttons for &quot;move all&quot;, but not every transfer list needs these.</InputWrapperDescription>
          <InputWrapper>
            <TransferList />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Enhanced transfer list</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>This example exchanges the &quot;move all&quot; buttons for a &quot;select all / select none&quot; checkbox and adds a counter.</InputWrapperDescription>
          <InputWrapper>
            <SelectAllTransferList />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Limitations</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The component comes with a couple of limitations:</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>It only works on desktop. If you have a limited amount of options to select, prefer the <FormLink href='https://mui.com/material-ui/react-autocomplete/#multiple-values' target='_blank'>Autocomplete</FormLink> component. If mobile support is important for you, have a look at <FormLink href='https://github.com/mui/material-ui/issues/27579' target='_blank'>#27579</FormLink>.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>There are no high-level components exported from npm. The demos are based on composition. If this is important for you, have a look at <FormLink href='https://github.com/mui/material-ui/issues/27579' target='_blank'>#27579</FormLink>.</InputWrapperDescription>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default TransferLists;