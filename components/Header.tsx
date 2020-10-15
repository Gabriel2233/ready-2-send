import { Flex, Text, Icon, useColorMode } from "@chakra-ui/core";
import { FiMessageCircle } from "react-icons/fi";
import { IconButton } from "./IconButton";
import { MobileNav } from "./MobileFilters";

export const Header = (props) => {
  const { hideFilters } = props;

  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      h={"4rem"}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={2}
      borderBottomColor={colorMode === "light" ? "gray.100" : "gray.600"}
      pos="fixed"
      top={0}
      zIndex={999}
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Text fontSize="xl" fontWeight="bold" color="blue.500" p={4}>
        <Icon as={FiMessageCircle} color="blue.500" mx={2} fontSize={26} />{" "}
        Ready-2-send
      </Text>
      <Flex alignItems="center">
        <IconButton />
        {!hideFilters && <MobileNav />}
      </Flex>
    </Flex>
  );
};
