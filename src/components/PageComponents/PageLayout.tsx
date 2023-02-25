import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Navbar from "../Navbar/Navbar";

const PageLayout = () => {
  return (
    <Flex w="full" direction="column">
      <Navbar />
      <Flex flex="1">
        <Outlet />
      </Flex>
      <MusicPlayer />
    </Flex>
  );
};

export default PageLayout;
