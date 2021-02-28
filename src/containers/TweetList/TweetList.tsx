import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import Tweet from "../../domain/components/Tweet/Tweet";

interface TweetListProps {
  tweets: Array<any>;
  handleOnDrop: (tweet: any) => void;
}

function TweetList({
  tweets,
  handleOnDrop,
}: TweetListProps): JSX.Element | null {


  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={1}
      align="stretch"
      width="45%"
    >
      {tweets.map(
        (tweet): JSX.Element => (
          <Tweet data={tweet} key={tweet.id} />
        )
      )}
    </VStack>
  );
}

export default TweetList;
