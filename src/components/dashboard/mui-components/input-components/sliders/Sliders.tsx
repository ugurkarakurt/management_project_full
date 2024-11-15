import React from 'react';
import { BasicInputsContainer, FormGroupBox, FormGroupTitle, FormGroupWrapper, InputWrapper, InputWrapperDescription, FormLink } from '../InputComponents.styles';
import ContinuousSlider from './Examples/ContinuousSliders';
import { CodeTag } from '@/app/global.styles';
import SliderSizes from './Examples/Size';
import DiscreteSlider from './Examples/DiscreteSliders';
import DiscreteSliderSteps from './Examples/SmellStep';
import DiscreteSliderMarks from './Examples/CustomMarks';
import DiscreteSliderValues from './Examples/RestrictedValues';
import DiscreteSliderLabel from './Examples/LabelAlwaysVisible';
import RangeSlider from './Examples/RangeSlider';
import MinimumDistanceSlider from './Examples/MinumumDistance';
import InputSlider from './Examples/SliderWithInputField';
import ColorSlider from './Examples/Color';
import CustomizedSlider from './Examples/Customization';
import MusicPlayerSlider from './Examples/MusicPlayer';
import VerticalSlider from './Examples/VerticalSliders';
import VerticalAccessibleSlider from './Examples/Warning';
import CustomMarks from './Examples/MarksPlacement';
import TrackFalseSlider from './Examples/RemovedTrack';
import TrackInvertedSlider from './Examples/InvertedTrack';
import NonLinearSlider from './Examples/Non-linearScale';

const Sliders = () => {

  return (
    <BasicInputsContainer>
      <FormGroupWrapper>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Continuous sliders</FormGroupTitle>
          <InputWrapperDescription>Continuous sliders allow users to select a value along a subjective range.</InputWrapperDescription>
          <InputWrapper>
            <ContinuousSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Sizes</FormGroupTitle>
          <InputWrapperDescription>For smaller slider, use the prop <CodeTag>size=&quot;small&quot;</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <SliderSizes />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Discrete sliders</FormGroupTitle>
          <InputWrapperDescription>Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with <CodeTag>marks={true}</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <DiscreteSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Small steps</FormGroupTitle>
          <InputWrapperDescription>You can change the default step increment. Make sure to adjust the <CodeTag>shiftStep</CodeTag> prop (the granularity with which the slider can step when using Page Up/Down or Shift + Arrow Up/Down) to a value divadable with the <CodeTag>step</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <DiscreteSliderSteps />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Custom marks</FormGroupTitle>
          <InputWrapperDescription>You can have custom marks by providing a rich array to the <CodeTag>marks</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <DiscreteSliderMarks />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Restricted values</FormGroupTitle>
          <InputWrapperDescription>You can restrict the selectable values to those provided with the <CodeTag>marks</CodeTag> prop with <CodeTag>step=&#123;&quot;null&quot;&#125;</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <DiscreteSliderValues />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Label always visible</FormGroupTitle>
          <InputWrapperDescription>You can force the thumb label to be always visible with <CodeTag>valueLabelDisplay=&quot;on&quot;</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <DiscreteSliderLabel />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Range slider</FormGroupTitle>
          <InputWrapperDescription>The slider can be used to set the start and end of a range by supplying an array of values to the <CodeTag>value</CodeTag> prop.</InputWrapperDescription>
          <InputWrapper>
            <RangeSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Minimum distance</FormGroupTitle>
          <InputWrapperDescription>You can enforce a minimum distance between values in the <CodeTag>onChange</CodeTag> event handler. By default, when you move the pointer over a thumb while dragging another thumb, the active thumb will swap to the hovered thumb. You can disable this behavior with the <CodeTag>disableSwap</CodeTag> prop. If you want the range to shift when reaching minimum distance, you can utilize the <CodeTag>activeThumb</CodeTag> parameter in <CodeTag>onChange</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <MinimumDistanceSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Slider with input field</FormGroupTitle>
          <InputWrapperDescription>In this example, an input allows a discrete value to be set.</InputWrapperDescription>
          <InputWrapper>
            <InputSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Color</FormGroupTitle>
          <InputWrapper>
            <ColorSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Customization</FormGroupTitle>
          <InputWrapperDescription>Here are some examples of customizing the component. You can learn more about this in the <FormLink href='https://mui.com/material-ui/customization/how-to-customize/' target='_blank'>overrides documentation page</FormLink>.</InputWrapperDescription>
          <InputWrapper>
            <CustomizedSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Music player</FormGroupTitle>
          <InputWrapper>
            <MusicPlayerSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Vertical sliders</FormGroupTitle>
          <InputWrapper>
            <VerticalSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>WARNING</FormGroupTitle>
          <InputWrapperDescription>Chrome, Safari and newer Edge versions that is any browser based on WebKit exposes <CodeTag>&lt;Slider orientation=&quot;vertical&quot; /&lt;</CodeTag> as horizontal (<FormLink href='https://issues.chromium.org/issues/40736841' target='_blank'>chromium issue #40736841</FormLink>). By applying <CodeTag>-webkit-appearance: slider-vertical;</CodeTag> the slider is exposed as vertical.</InputWrapperDescription>
          <InputWrapperDescription>However, by applying <CodeTag>-webkit-appearance: slider-vertical;</CodeTag> keyboard navigation for horizontal keys (<CodeTag>Arrow Left</CodeTag>, <CodeTag>Arrow Right</CodeTag>) is reversed (<FormLink href='https://issues.chromium.org/issues/40739626' target='_blank'>chromium issue #40739626</FormLink>). Usually, up and right should increase and left and down should decrease the value. If you apply <CodeTag>-webkit-appearance</CodeTag> you could prevent keyboard navigation for horizontal arrow keys for a truly vertical slider. This might be less confusing to users compared to a change in direction.</InputWrapperDescription>
          <InputWrapper>
            <VerticalAccessibleSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Marks placement</FormGroupTitle>
          <InputWrapperDescription>You can customize your slider by adding and repositioning marks for minimum and maximum values.</InputWrapperDescription>
          <InputWrapper>
            <CustomMarks />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Track</FormGroupTitle>
          <InputWrapperDescription>The track shows the range available for user selection.</InputWrapperDescription>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Removed track</FormGroupTitle>
          <InputWrapperDescription>The track can be turned off with <CodeTag>track=&#123;&quot;false&quot;&#125;</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <TrackFalseSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Inverted track</FormGroupTitle>
          <InputWrapperDescription>The track can be inverted with <CodeTag>track=&#123;&quot;inverted&quot;&#125;</CodeTag>.</InputWrapperDescription>
          <InputWrapper>
            <TrackInvertedSlider />
          </InputWrapper>
        </FormGroupBox>
        <FormGroupBox>
          <FormGroupTitle variant='h6'>Non-linear scale</FormGroupTitle>
          <InputWrapperDescription>You can use the <CodeTag>scale</CodeTag> prop to represent the <CodeTag>value</CodeTag> on a different scale.</InputWrapperDescription>
          <InputWrapperDescription>In the following demo, the value x represents the value 2^x. Increasing x by one increases the represented value by factor 2.</InputWrapperDescription>
          <InputWrapper>
            <NonLinearSlider />
          </InputWrapper>
        </FormGroupBox>
      </FormGroupWrapper>
    </BasicInputsContainer>
  );
}

export default Sliders;