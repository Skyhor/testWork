import React from 'react';
import './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filter/filtreSlice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch(getFilter);
  return (
    <label htmlFor="">
      Find contact by name
      <input
        type="text"
        onChange={ev => dispatch(filter(ev.target.value.toLowerCase()))}
      />
    </label>
  );
};
export default Filter;
