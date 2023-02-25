import { Flex } from "@chakra-ui/react";
import PageRoutes from "./components/PageComponents/PageRoutes";

const App = () => {
  return (
    <Flex minH="100svh" w="full" justify="center" px={["4"]}>
      <Flex w="full" maxW="7xl">
        <PageRoutes />
      </Flex>
    </Flex>
  );
};

export default App;
