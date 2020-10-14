import gql from "graphql-tag";

export const GET_ALL_MESSAGES = gql`
  query {
    allMessages {
      edges {
        node {
          messageContent
          mostlyFor
          isDynamic
          _meta {
            id
            firstPublicationDate
          }
        }
      }
    }
  }
`;
