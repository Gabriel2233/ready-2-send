import { Flex, Text, Link } from "@chakra-ui/core";

export const Footer = () => {
  return (
    <Flex w="full" alignItems="center" justifyContent="center" p={4}>
      <Text fontSize="md" color="gray.500">
        Made ❤️ with by
        <Link href="https://github.com/Gabriel2233" target={"_blank"} px={1}>
          Gabriel Tiso
        </Link>
      </Text>
    </Flex>
  );
};
