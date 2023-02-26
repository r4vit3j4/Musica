import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const MusicTrackInfo = () => {
  return (
    <Flex align="center" gap="3">
      <Box flexShrink="0">
        <Image
          src="https://c.saavncdn.com/619/Avunanavaa-From-Ori-Devuda-Telugu-2022-20220926103953-50x50.jpg"
          height="50"
          width="50"
          objectFit="contain"
        />
      </Box>
      <Flex direction="column" gap="0.5">
        <Text fontWeight="bold" noOfLines={1}>
          Avunananva
        </Text>
        <Text color="gray.600" noOfLines={1}>
          Leon James, Sid Sriram
        </Text>
      </Flex>
    </Flex>
  );
};

export default MusicTrackInfo;
