import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectSearchData } from "../../redux/features/search/SearchSlice";
import Loader from "../PageComponents/Loader";

const SearchResults = () => {
  const { data, status } = useSelector(selectSearchData);

  if (status.isLoading) {
    return <Loader />;
  } else if (status.isError) {
    return <Text>{status.error}</Text>;
  }

  return (
    <Flex gap="5" w="full" direction="column">
      {data.songs.length > 0 && (
        <Flex direction="column" gap="2">
          <Heading fontSize="xl">Songs</Heading>
          <Flex direction="column" gap="2">
            {data.songs.map((song) => (
              <Flex
                key={song.id}
                gap="3"
                align="center"
                _hover={{ bg: "blackAlpha.50" }}
                borderRadius="lg"
                p="2"
                cursor="pointer"
              >
                <Box minH="50" minW="50" bg="blackAlpha.200" borderRadius="md">
                  <Image borderRadius="md" src={song.image} h="50" w="50" />
                </Box>
                <Flex direction="column" fontSize="sm">
                  <Text fontWeight="semibold" key={song.id} noOfLines={1}>
                    {song.title}
                  </Text>
                  <Text color="gray.600" noOfLines={1}>
                    {song.description}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
      {data.albums.length > 0 && (
        <Flex direction="column" gap="2">
          <Heading fontSize="xl">Albums</Heading>
          <Flex direction="column" gap="2">
            {data.albums.map((album) => (
              <Flex
                key={album.id}
                gap="3"
                align="center"
                _hover={{ bg: "blackAlpha.50" }}
                borderRadius="lg"
                p="2"
                cursor="pointer"
              >
                <Box minH="50" minW="50" bg="blackAlpha.200" borderRadius="md">
                  <Image borderRadius="md" src={album.image} h="50" w="50" />
                </Box>
                <Flex direction="column" fontSize="sm">
                  <Text fontWeight="semibold" key={album.id} noOfLines={1}>
                    {album.title}
                  </Text>
                  <Text color="gray.600" noOfLines={1}>
                    {album.description}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default SearchResults;
