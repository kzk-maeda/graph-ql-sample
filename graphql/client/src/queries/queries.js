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

export const DIRECTOR_LIST = gql`
    query {
        directors{
            id
            name
        }
    }`

export const ADD_MOVIE = gql`
    mutation($name: String!, $genre: String!, $directorId: ID!) {
        addMovie(name: $name genre: $genre directorId: $directorId) {
        name
        genre
        }
    }`

export const ADD_DIRECTOR = gql`
    mutation($name: String!, $age: Int!) {
        addDirector(name: $name age: $age ) {
            id
            name
            age
        }
    }
`

export const DELETE_MOVIE = gql`
    mutation($id: ID!) {
        deleteMovie(id: $id){
            id
        }
    }
`