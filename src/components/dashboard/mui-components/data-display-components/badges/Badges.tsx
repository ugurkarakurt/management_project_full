import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, FormLink, InputWrapper, InputWrapperDescription } from '../DataDisplayComponents.styles';
import { CodeTag } from '@/app/global.styles';
import SimpleBadge from './Examples/BasicBadge';
import ColorBadge from './Examples/Color';
import CustomizedBadges from './Examples/Customization';
import BadgeVisibility from './Examples/BadgeVisibility';
import ShowZeroBadge from './Examples/ShowZeroBadge';
import BadgeMax from './Examples/MaximumValue';
import DotBadge from './Examples/DotBadge';
import BadgeOverlap from './Examples/BadgeOverlap';
import AccessibleBadges from './Examples/Accessibility';

const Badges = () => {
  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Image avatars</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Image avatars can be created by passing standard <CodeTag>img</CodeTag> props <CodeTag>src</CodeTag> or <CodeTag>srcSet</CodeTag> to the component.</InputWrapperDescription>
          <InputWrapper>
            <SimpleBadge />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Color</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Use <CodeTag>color</CodeTag> prop to apply theme palette to component.</InputWrapperDescription>
          <InputWrapper>
            <ColorBadge />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Customization</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Here is an example of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedBadges />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Badge visibility</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The visibility of badges can be controlled using the <CodeTag>invisible</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <BadgeVisibility />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>The badge hides automatically when badgeContent is zero. You can override this with the showZero prop.</InputWrapperDescription>
          <InputWrapper>
            <ShowZeroBadge />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Maximum value</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can use the <CodeTag>max</CodeTag> prop to cap the value of the badge content.</InputWrapperDescription>
          <InputWrapper>
            <BadgeMax />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Dot badge</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>The <CodeTag>dot</CodeTag> prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.</InputWrapperDescription>
          <InputWrapper>
            <DotBadge />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Badge overlap</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can use the <CodeTag>overlap</CodeTag> prop to place the badge relative to the corner of the wrapped element.</InputWrapperDescription>
          <InputWrapper>
            <BadgeOverlap />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Accessibility</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can&apos;t rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with <CodeTag>aria-label:</CodeTag></InputWrapperDescription>
          <InputWrapper>
            <AccessibleBadges />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Badges;
