import { Flex } from "@chakra-ui/react";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
  return (
    <Flex w="full" justify="space-between" align="center" gap="6" py="4">
      <NavbarLogo />
      <NavbarSearch />
      <NavbarMenu />
    </Flex>
  );
};

export default Navbar;
