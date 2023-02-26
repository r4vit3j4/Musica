import {
  Box,
  Button,
  Flex,
  Show,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import {
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";

const MusicControls = () => {
  return (
    <Flex direction="column" align="center" gap="2">
      <Flex align="center" gap="3">
        <Button p="2" variant="link" color="black">
          <IconPlayerSkipBackFilled color="black" />
        </Button>
        <Button variant="link" color="black">
          <Box bg="gray.300" p="2" borderRadius="full">
            <IconPlayerPlayFilled />
          </Box>
        </Button>
        <Button p="2" variant="link" color="black">
          <IconPlayerSkipForwardFilled />
        </Button>
      </Flex>
      <Show above="md">
        <Flex fontSize="xs" align="center" gap="3">
          <Text>0:00</Text>
          <Slider w="md" aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text>0:00</Text>
        </Flex>
      </Show>
    </Flex>
  );
};

export default MusicControls;
