import { Flex, Show } from "@chakra-ui/react";
import MusicControls from "./MusicControls";
import MusicTrackInfo from "./MusicTrackInfo";
import VolumeControls from "./VolumeControls";

const MusicPlayer = () => {
  return (
    <Flex gap="2" justify="space-between" align="center" py={["4", "3"]}>
      <MusicTrackInfo />
      <MusicControls />
      <Show above="lg">
        <VolumeControls />
      </Show>
    </Flex>
  );
};

export default MusicPlayer;
