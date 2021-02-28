import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import TweetSaver from './containers/TweetSaver/TweetSaver';

export const App = () => (
  <ChakraProvider theme={theme}>
    <TweetSaver />
  </ChakraProvider>
)
