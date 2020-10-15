import {
  Flex,
  Text,
  Icon,
  Heading,
  Button,
  useClipboard,
  Tooltip,
} from "@chakra-ui/core";
import { FiHeart, FiCopy } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import useBrandIcon from "../hooks/useBrandIcon";
import { Message as MessageType } from "../utils/types";

interface IProps {
  messageData: MessageType;
  handleAddToFavorites(messageItemId: string): void;
}

export const Message: React.FC<IProps> = ({
  messageData,
  handleAddToFavorites,
}) => {
  const messageContent = messageData.node.messageContent;

  const { hasCopied, onCopy } = useClipboard(messageContent);
  const iconObject: { icon: IconType; color: string } = useBrandIcon(
    messageData.node.mostlyFor
  );

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor={"gray.300"}
      rounded="4px"
      m={6}
    >
      <Flex w="full" alignItems="center" justifyContent="space-between">
        <Tooltip
          aria-label="tooltip"
          placement="right"
          placeholder="Hello"
          label={`This message is common for ${messageData.node.mostlyFor}`}
        >
          <Text fontSize="md" color="gray.500" m={4}>
            <Icon
              as={iconObject.icon}
              color={iconObject.color}
              mx={1}
              fontSize={24}
            />
          </Text>
        </Tooltip>

        <Icon
          as={FiHeart}
          color="red.500"
          m={4}
          cursor="pointer"
          fontSize={22}
          onClick={() => handleAddToFavorites(messageData.node._meta.id)}
        />
      </Flex>

      <Flex w="full" alignItems="center" justifyContent="center" px={4} py={6}>
        <Heading
          textAlign="center"
          size={messageContent.length < 18 ? "lg" : "md"}
          h={50}
        >
          {messageContent}
        </Heading>
      </Flex>

      <Flex w="full" py={3} alignItems="center" justifyContent="flex-end">
        <Button mx={4} onClick={onCopy}>
          <Icon as={FiCopy} mx={1} /> {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
    </Flex>
  );
};
