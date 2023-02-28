import {
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../../redux/features/search/services";
import { AppDispatch } from "../../redux/store/store";
import SearchResults from "./SearchResults";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      dispatch(fetchSearchData(search));
    }
  };

  useEffect(() => {
    const searchData = setTimeout(() => {
      dispatch(fetchSearchData(search));
    }, 500);

    return () => clearTimeout(searchData);
  }, [search]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent borderRadius="lg" mx="4">
        <ModalHeader>
          <form onSubmit={handleSubmit}>
            <Flex align="center" gap="3">
              <IconSearch color="#718096" />
              <Input
                type="text"
                size="lg"
                variant="unstyled"
                bg="white"
                placeholder="What do you want to listen to?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Flex>
          </form>
        </ModalHeader>
        <ModalBody>
          {search.trim() === "" ? (
            <Flex direction="column" gap="2" align="center" justify="center">
              <Image src="/assets/illustrations/DancingDoodle.webp" w="56" />
              <Heading textAlign="center">
                Search for your favourite songs or albums
              </Heading>
            </Flex>
          ) : (
            <SearchResults />
          )}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
