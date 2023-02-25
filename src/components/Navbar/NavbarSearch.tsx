import { Flex, Input } from "@chakra-ui/react";

const NavbarSearch = () => {
  return (
    <Flex flex="1" maxW="lg" align="center" gap="2">
      <Input
        type="text"
        bg="white"
        placeholder="Seach for a song, artist, album or playlist"
      />
    </Flex>
  );
};

export default NavbarSearch;
