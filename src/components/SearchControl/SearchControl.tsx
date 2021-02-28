import { FormControl, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React from "react";

interface SearchControlProps {
    onSearchSubmit: (searchTerm: string | null) => void;
}

function SearchControl({ onSearchSubmit }: SearchControlProps): JSX.Element {

    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const handleOnSubmit = (e: any): void => {
        e.preventDefault();
        onSearchSubmit(searchTerm);
    }

  return (
    <form onSubmit={handleOnSubmit} autoComplete="off">
      <FormControl id="searchControl">
        <Flex>
          <Input type="text" placeholder="Search Twitter" onChange={(e) => setSearchTerm(e.target.value)}  value={searchTerm} />
          <IconButton type="submit" aria-label="Submit search term" icon={<FaSearch />} />
        </Flex>
      </FormControl>
    </form>
  );
}

export default SearchControl;
