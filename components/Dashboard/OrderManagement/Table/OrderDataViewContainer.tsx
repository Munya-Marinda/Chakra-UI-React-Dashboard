import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import OrderDataDesktopView from "./OrderDataDesktopView.tsx";
import OrderDataMobileView from "./OrderDataMobileView.tsx";
import React from "react";

const OrderDataViewContainer = (props) => {
  // states start

  const { isOpen, onOpen, onClose } = useDisclosure();

  // states end

  // Modal starts

  const QuoteModal = () => {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.{"/n"}
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </ModalBody>

            <ModalFooter>
              <Button bg={"blue"} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  // Modal ends

  return (
    <>
      <QuoteModal />
      {/* Mobile Data View */}
      <Stack display={{ base: "none", md: "block" }}>
        <OrderDataDesktopView columns={props.columns} data={props.data} />
      </Stack>
      {/* Mobile Data View */}
      <Stack display={{ base: "block", md: "none" }}>
        <OrderDataMobileView data={props.data} />
      </Stack>
    </>
  );
};

export default OrderDataViewContainer;
