import React from 'react';
import './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filter/filtreSlice';
import { selectFilter } from 'redux/filter/filter-selectors';
import { Center, FormLabel, Input } from '@chakra-ui/react';
const Filter = () => {
  const dispatch = useDispatch(selectFilter);
  return (
    <Center>
      <FormLabel htmlFor="">
        Find contact by name
        <Input
          type="text"
          onChange={ev => dispatch(filter(ev.target.value.toLowerCase()))}
        />
      </FormLabel>
    </Center>
  );
};
export default Filter;
