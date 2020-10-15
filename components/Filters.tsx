import {
  Flex,
  Heading,
  Text,
  Icon,
  CheckboxGroup,
  Checkbox,
  useColorMode,
  Box,
  Button,
} from "@chakra-ui/core";
import { FiSliders, FiHome } from "react-icons/fi";
import { TiHeart } from "react-icons/ti";
import { useSearch } from "../contexts/searchContext";

export const Filters = () => {
  const { colorMode } = useColorMode();

  const { socialMediaBrands, onSocialMediaChange } = useSearch();

  return (
    <Box
      h="100%"
      pos="fixed"
      top={0}
      left={0}
      zIndex={9999}
      overflowY="auto"
      background={colorMode === "light" ? "white" : "gray.800"}
      borderRightColor={colorMode === "light" ? "gray.100" : "gray.600"}
      borderRightWidth={2}
    >
      <Flex flexDir="column" pr={[4, 6]} py={16}>
        <Button w="full" my={8} mx={4}>
          <Icon as={FiHome} mr={2} color="blue.500" fontSize={18} /> All
          Messages
        </Button>

        <Button w="full" mx={4}>
          <Icon as={TiHeart} mr={2} color="red.500" fontSize={22} /> My
          Favorites
        </Button>

        <Heading size="lg" p={8} textAlign="start">
          <Icon as={FiSliders} color="blue.500" mr={2} /> Filters
        </Heading>

        <Flex alignItems="flex-start" flexDir="column" py={4} px={10}>
          <Text fontWeight="bold">By social media</Text>
          <CheckboxGroup
            py={2}
            variantColor="blue"
            onChange={onSocialMediaChange}
            value={socialMediaBrands}
          >
            <Checkbox value="Facebook">Facebook</Checkbox>
            <Checkbox value="WhatsApp">WhatsApp</Checkbox>
            <Checkbox value="Twitter">Twitter</Checkbox>
            <Checkbox value="Gmail">Emails</Checkbox>
          </CheckboxGroup>
        </Flex>

        <Flex alignItems="flex-start" flexDir="column" py={6} px={10}>
          <Text fontWeight="bold">By date</Text>
          <CheckboxGroup py={2} variantColor="blue">
            <Checkbox value="ASC">Ascending</Checkbox>
            <Checkbox value="DESC">Descending</Checkbox>
          </CheckboxGroup>
        </Flex>
      </Flex>
    </Box>
  );
};
