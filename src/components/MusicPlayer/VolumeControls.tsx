import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { IconVolume2 } from "@tabler/icons-react";

const VolumeControls = () => {
  return (
    <Flex align="center" gap="1">
      <IconVolume2 />
      <Slider w="28" aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};

export default VolumeControls;
