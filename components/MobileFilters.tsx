import {
  Drawer,
  DrawerBody,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/core";
import React from "react";
import { Filters } from "./Filters";

import { FiMenu } from "react-icons/fi";

export const MobileNav = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Navigation Menu"
        fontSize="20px"
        variant="ghost"
        display={{ sm: "inline-flex", md: "none" }}
        color="gray.500"
        icon={FiMenu}
        onClick={onToggle}
        mx={2}
      />
      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent w="60%">
          <DrawerBody>
            <Filters />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
