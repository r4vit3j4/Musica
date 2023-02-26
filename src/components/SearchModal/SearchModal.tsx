import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="4" marginTop="20">
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Flex py="4" align="center" gap="3">
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
