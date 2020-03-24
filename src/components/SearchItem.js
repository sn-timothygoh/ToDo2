import React, {useState, useEffect} from 'react';
import {SearchBar} from 'react-native-elements';

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

const SearchItem = ({searchTodo}) => {
  const [search, setSearch] = useState('');
  const debounceSearch = useDebounce(search, 300);

  useEffect(() => {
    searchTodo(debounceSearch);
  }, [debounceSearch]);

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={setSearch}
      value={search}
      platform="ios"
    />
  );
};
export default SearchItem;
