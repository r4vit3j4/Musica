import { Button, Flex } from "@chakra-ui/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Flex>
      <Button as={Link} to="/about">
        <IconBrandGithub size="20" />
      </Button>
    </Flex>
  );
};

export default NavbarMenu;
