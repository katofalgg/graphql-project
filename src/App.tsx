import React from 'react';
import './App.css';
import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache,} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetCharacters from './components/GetCharacters/GetCharactes';
import Navbar from './components/Navbar/Navbar';

const errorLink = onError(({graphQLErrors}) => {
    if (graphQLErrors) {
        graphQLErrors.map((message) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({uri: "https://rickandmortyapi.com/graphql"}),
]);
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

const App: React.FC = () => {
    return <ApolloProvider client={client}>
        <div className='navbar'><Navbar/></div>
        <div className='characters_page'><GetCharacters/></div>
    </ApolloProvider>
};

export default App;
