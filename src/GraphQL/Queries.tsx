import {gql} from '@apollo/client';

export const LOAD_CHARACTERS = (page: number) => gql`
query {
    characters(page: ${page}) {
      results {
      id
      name
      status
      species
      type
      gender
      image
      }
    }
  }
`;
