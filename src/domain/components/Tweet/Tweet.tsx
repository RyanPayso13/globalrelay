import { Avatar, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

interface TweetProps {
    data: {
        id: string;    
        profile_background_image_url: string;
        name: string;
        url: string;
        screen_name: string;
        created_at: string;
        text: string;
    };
}

function Tweet({data}: TweetProps): JSX.Element {

const { profile_background_image_url, name, url, screen_name, created_at, text } = data;

    return (
        <Flex draggable="true" data-testid="tweet">
            <Avatar size="md" name={name} src={profile_background_image_url} />
            <Text>{name}</Text>
            <Link href={url}>{screen_name}</Link>
            <Text>{new Date(created_at).toLocaleDateString()}</Text>
            <Text>{text}</Text>
        </Flex>
    );
}

export default Tweet;