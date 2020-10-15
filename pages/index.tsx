import Head from "next/head";
import { Box, Flex, Grid, Spinner } from "@chakra-ui/core";
import { prismicClient } from "../lib/prismic";
import { GetStaticProps } from "next";
import { GET_ALL_MESSAGES } from "../graphql/queries";
import { Message as MessageType } from "../utils/types";
import { Filters } from "../components/Filters";
import { Header } from "../components/Header";
import { Message } from "../components/Message";
import { useSearch } from "../contexts/searchContext";
import { useEffect, useState } from "react";

interface IProps {
  allMessages: MessageType[];
}

const Home: React.FC<IProps> = ({ allMessages }) => {
  const [favorites, setFavorites] = useState<Array<MessageType>>([]);

  const handleAddToFavorites = (messageItemId: string) => {
    const selectedItem = filteredMessages.find(
      (message) => message.node._meta.id === messageItemId
    );

    setFavorites((state) => [...state, { ...selectedItem }]);

    console.log(favorites);
  };

  const { socialMediaBrands } = useSearch();
  const filteredMessages = allMessages.filter((message) =>
    socialMediaBrands.includes(message.node.mostlyFor)
  );

  return (
    <>
      <Head>
        <title>Ready-2-Send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100vw" h="100vh" flexDir="column" overflowX="hidden">
        <Header />
        <Flex
          w="full"
          h="100%"
          zIndex={5}
          alignItems="center"
          justifyContent="center"
          my={4}
        >
          <Box d={["none", null, "block"]}>
            <Filters />
          </Box>
          <Grid
            pt={8}
            gridTemplateColumns={"1fr"}
            m={"auto"}
            w={"80%"}
            maxW={"980px"}
            pl={[0, null, "9rem"]}
          >
            {allMessages.length ? (
              filteredMessages.map((message) => (
                <Message
                  messageData={message}
                  handleAddToFavorites={handleAddToFavorites}
                  key={message.node._meta.id}
                />
              ))
            ) : (
              <Spinner />
            )}
          </Grid>
        </Flex>
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
