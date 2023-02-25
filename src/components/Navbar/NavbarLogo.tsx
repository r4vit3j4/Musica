import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/">
      <Image
        src="/assets/logos/logo-icon.png"
        w="10"
        h="10"
        objectFit="contain"
      />
    </Link>
  );
};

export default NavbarLogo;
