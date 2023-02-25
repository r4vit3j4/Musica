import { Flex } from "@chakra-ui/react";
import MusicControls from "./MusicControls";
import MusicTrackInfo from "./MusicTrackInfo";
import VolumeControls from "./VolumeControls";

const MusicPlayer = () => {
  return (
    <Flex justify="space-between" align="center" py="4">
      <MusicTrackInfo />
      <MusicControls />
      <VolumeControls />
    </Flex>
  );
};

export default MusicPlayer;
