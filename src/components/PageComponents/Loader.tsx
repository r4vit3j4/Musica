import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex w="full" justify="center" align="center">
      <Spinner />
    </Flex>
  );
};

export default Loader;
