import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, FormLink, InputWrapper, InputWrapperDescription } from '../DataDisplayComponents.styles';

const MuiIcons = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <iframe src="https://mui.com/material-ui/material-icons/" title="Inline Frame Example" frameBorder={0}
            width="100%"
            height="650"></iframe>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default MuiIcons;
