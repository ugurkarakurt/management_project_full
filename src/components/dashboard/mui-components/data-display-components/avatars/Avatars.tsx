import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription } from '../DataDisplayComponents.styles';
import { CodeTag } from '@/app/global.styles';
import ImageAvatars from './Examples/ImageAvatar';
import LetterAvatars from './Examples/LetterAvatar';
import BackgroundLetterAvatars from './Examples/BackgroundLetterAvatar';
import SizeAvatars from './Examples/Size';
import IconAvatars from './Examples/IconAvatar';
import VariantAvatars from './Examples/Variants';
import FallbackAvatars from './Examples/Fallbacks';
import GroupAvatars from './Examples/Grouped';
import TotalAvatars from './Examples/TotalAvatar';
import CustomSurplusAvatars from './Examples/CustomSurplus';
import BadgeAvatars from './Examples/WithBadge';

const Avatars = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Image avatars</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Image avatars can be created by passing standard <CodeTag>img</CodeTag> props <CodeTag>src</CodeTag> or <CodeTag>srcSet</CodeTag> to the component.</InputWrapperDescription>
          <InputWrapper>
            <ImageAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Letter avatars</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Avatars containing simple characters can be created by passing a string as <CodeTag>children</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <LetterAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <InputWrapperDescription variant='inherit'>You can use different background colors for the avatar. The following demo generates the color based on the name of the person.</InputWrapperDescription>
          <InputWrapper>
            <BackgroundLetterAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Sizes</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>You can change the size of the avatar with the <CodeTag>height</CodeTag> and <CodeTag>width</CodeTag> CSS properties.</InputWrapperDescription>
          <InputWrapper>
            <SizeAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Icon avatars</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Icon avatars are created by passing an icon as <CodeTag>children</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <IconAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Variants</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>If you need square or rounded avatars, use the <CodeTag>variant</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <VariantAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Fallbacks</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>If there is an error loading the avatar image, the component falls back to an alternative in the following order:</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>the provided children</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>the first letter of the alt text</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>a generic avatar icon</InputWrapperDescription>
          <InputWrapper>
            <FallbackAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>GroupAvatars</FormGroupTitle>
          <InputWrapperDescription variant='inherit'><CodeTag>AvatarGroup</CodeTag> renders its children as a stack. Use the <CodeTag>max</CodeTag> prop to limit the number of avatars.</InputWrapperDescription>
          <InputWrapper>
            <GroupAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Total avatars</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>If you need to control the total number of avatars not shown, you can use the <CodeTag>total</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <TotalAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>Custom surplus</FormGroupTitle>
          <InputWrapperDescription variant='inherit'>Set the <CodeTag>renderSurplus</CodeTag> prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the <CodeTag>max</CodeTag> prop, and should return a <CodeTag>React.ReactNode</CodeTag>.</InputWrapperDescription>
          <InputWrapperDescription variant='inherit'>The <CodeTag>renderSurplus</CodeTag> prop is useful when you need to render the surplus based on the data sent from the server.</InputWrapperDescription>
          <InputWrapper>
            <CustomSurplusAvatars />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h4'>With badge</FormGroupTitle>
          <InputWrapper>
            <BadgeAvatars />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Avatars;
