import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import { CodeTag } from '@/app/global.styles';
import BasicRating from './Examples/BasicRating';
import HalfRating from './Examples/RatingPrecision';
import HoverRating from './Examples/HoverFeedback';
import RatingSize from './Examples/Size';
import CustomizedRating from './Examples/Customization';
import RadioGroupRating from './Examples/RadioGroup';
import TextRating from './Examples/Accessibility';


const Ratings = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Basic rating</FormGroupTitle>
          <InputWrapper>
            <BasicRating />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Rating precision</FormGroupTitle>
          <InputWrapperDescription>The rating can display any float number with the <CodeTag>value</CodeTag> prop. Use the <CodeTag>precision</CodeTag> prop to define the minimum increment value change allowed.</InputWrapperDescription>
          <InputWrapper>
            <HalfRating />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Hover feedback</FormGroupTitle>
          <InputWrapperDescription>You can display a label on hover to help the user pick the correct rating value. The demo uses the <CodeTag>onChangeActive</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <HoverRating />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Sizes</FormGroupTitle>
          <InputWrapperDescription>For larger or smaller ratings use the <CodeTag>size</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <RatingSize />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription>Here are some examples of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedRating />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Radio group</FormGroupTitle>
          <InputWrapperDescription>The rating is implemented with a radio group, set <CodeTag>highlightSelectedOnly</CodeTag> to restore the natural behavior.</InputWrapperDescription>
          <InputWrapper>
            <RadioGroupRating />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Accessibility</FormGroupTitle>
          <InputWrapperDescription><FormLink href='https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating' target='_blank'>(WAI tutorial)</FormLink></InputWrapperDescription>
          <InputWrapperDescription>The accessibility of this component relies on:</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>A radio group with its fields visually hidden. It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the name prop that is unique to the parent form.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>Labels for the radio buttons containing actual text (&quot;1 Star&quot;, &quot;2 Stars&quot;, …). Be sure to provide a suitable function to the <CodeTag>getLabelText</CodeTag> prop when the page is in a language other than English. You can use the <FormLink href='https://mui.com/material-ui/guides/localization/' target='_blank'>included locales</FormLink>, or provide your own.</InputWrapperDescription>
          <InputWrapperDescription variant='body2' ml={3}>A visually distinct appearance for the rating icons. By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match <FormLink href='https://www.w3.org/TR/WCAG21/#use-of-color' target='_blank'>success Criterion 1.4.1</FormLink> of WCAG2.1.</InputWrapperDescription>
          <InputWrapper>
            <TextRating />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>ARIA</FormGroupTitle>
          <InputWrapperDescription>The read only rating has a role of <CodeTag>&quot;img&quot;</CodeTag>, and an aria-label that describes the displayed rating.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Keyboard</FormGroupTitle>
          <InputWrapperDescription>Because the rating component uses radio buttons, keyboard interaction follows the native browser behavior. Tab will focus the current rating, and cursor keys control the selected rating.</InputWrapperDescription>
          <InputWrapperDescription>The read only rating is not focusable.</InputWrapperDescription>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Ratings;