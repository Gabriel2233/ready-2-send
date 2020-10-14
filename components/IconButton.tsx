import { useColorMode, IconButton as ChakraIconButton } from "@chakra-ui/core";

export const IconButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <ChakraIconButton
      m={4}
      mx={8}
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      variant="ghost"
      color="current"
      ml="2"
      fontSize="20px"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? "moon" : "sun"}
    />
  );
};
