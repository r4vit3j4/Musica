import { Flex, Input, useDisclosure } from "@chakra-ui/react";
import SearchModal from "./SearchModal";

const NavbarSearch = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flex="1" maxW="lg" align="center" gap="2">
      <Input
        type="text"
        bg="white"
        placeholder="What do you want to listen to?"
        readOnly
        onClick={onOpen}
      />
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default NavbarSearch;
