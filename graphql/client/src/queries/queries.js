import { gql } from '@apollo/client';

export const MOVIE_LIST = gql`
    query {
        movies{
            id
            name
            genre
            director{
                name
            }
        }
    }`