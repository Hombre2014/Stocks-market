import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IndicesFetch from '../redux/IndicesFetch';

const Indices = (ticker) => {
  const { index } = ticker;

  const dispatch = useDispatch();

  console.log('This the ticker object - index: name ', ticker);
  console.log('This is the index: i.e. ', index);

  useEffect(() => {
    dispatch(IndicesFetch(index));
  }, []);

  const indices = useSelector((state) => state.indicesReducer);

  console.log('This is indices: ', indices);
  if (indices.length > 0) {
    return (
      <div>
        <p>
          {index}
          :
          {' '}
          {parseFloat(indices[0].price).toFixed(2)}
        </p>
      </div>
    );
  }
  return (
    <div>Loading ...</div>
  );
};

export default Indices;
