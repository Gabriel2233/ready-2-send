import Head from "next/head";
import {
  Flex,
  Text,
  Icon,
  Grid,
  useColorMode,
  Radio,
  RadioGroup,
  Heading,
} from "@chakra-ui/core";
import { FiSend, FiSliders } from "react-icons/fi";
import { IconButton } from "../components/IconButton";
import { Footer } from "../components/Footer";
import { Message } from "../components/Message";
import { prismicClient } from "../lib/prismic";
import { GetStaticProps } from "next";
import { GET_ALL_MESSAGES } from "../graphql/queries";
import { Message as MessageType } from "../utils/types";
import { useState } from "react";

interface IProps {
  allMessages: MessageType[];
}

const Home: React.FC<IProps> = ({ allMessages }) => {
  const { colorMode } = useColorMode();
  const [value, setValue] = useState("1");

  return (
    <>
      <Head>
        <title>Ready-2-Send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100vw" h="100vh" flexDir="column">
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={2}
          borderBottomColor={colorMode === "light" ? "gray.100" : "gray.600"}
        >
          <Text fontSize="xl" fontWeight="bold" color="blue.500" p={4}>
            <Icon as={FiSend} color="blue.500" mx={2} /> Ready-2-send
          </Text>

          <IconButton />
        </Flex>
        <Flex w="full" alignItems="center" justifyContent="center">
          <Flex
            h="full"
            borderRightColor={colorMode === "light" ? "gray.100" : "gray.600"}
            borderRightWidth={2}
          >
            <Flex flexDir="column">
              <Heading size="lg" p={8} textAlign="start">
                <Icon as={FiSliders} color="blue.500" mr={2} /> Filters
              </Heading>

              <Flex alignItems="flex-start" flexDir="column" py={6} px={10}>
                <Text fontWeight="bold">By social media</Text>
                <RadioGroup
                  py={4}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                >
                  <Radio value="1">Facebook</Radio>
                  <Radio value="2">WhatsApp</Radio>
                  <Radio value="3">Twitter</Radio>
                  <Radio value="4">Gmail</Radio>
                </RadioGroup>
              </Flex>
            </Flex>
          </Flex>

          <Grid
            pt={8}
            gridTemplateColumns={"1fr"}
            maxW={"700px"}
            m={"0 auto"}
            w={"90%"}
          >
            {allMessages.map((messageData) => (
              <Message messageData={messageData} />
            ))}
          </Grid>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismicClient.query({
    query: GET_ALL_MESSAGES,
  });

  const allMessages = await response.data.allMessages.edges;

  return { props: { allMessages } };
};
