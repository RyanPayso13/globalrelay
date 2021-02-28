import React from 'react';
import {Container, Flex, Heading} from '@chakra-ui/react';
import SearchControl from '../../components/SearchControl/SearchControl';
import TweetList from '../TweetList/TweetList';

function TweetSaver() {

    const [searchResults, setSearchResult] = React.useState<Array<any>>([]);
    const [savedTweets, setSavedTweets] = React.useState<Array<any>>([]);

    const handleOnSearchSubmit = (searchTerm: string | null): void => {
       // call service
       // set search results
    }

    const handleOnDrop = (tweet: any): void => {
        // remove from searchResults
        // add to saved tweets and local storage
    }

    return (
        <Container maxW="container.xl">
            <Heading>Tweet Saver</Heading>
            <Flex>
                <SearchControl onSearchSubmit={handleOnSearchSubmit}/>
            </Flex>
            <Flex>
                <TweetList tweets={searchResults} handleOnDrop={() => null} />
                <TweetList tweets={savedTweets} handleOnDrop={handleOnDrop} />
            </Flex>
        </Container>
    );
}

export default TweetSaver;