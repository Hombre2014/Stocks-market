import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IndicesFetch from '../redux/IndicesFetch';
// import { v4 as uuidv4 } from 'uuid';

const Indices = (ticker) => {
  const { index } = ticker;
  const dispatch = useDispatch();
  console.log('This the ticker object - index: name ', ticker);
  console.log('This is the index: i.e. ', index);
  useEffect(() => {
    dispatch(IndicesFetch(index));
  }, []);
  const indices = useSelector((state) => state.indicesReducer);
  console.log('This is array of single object index with keys: values ', indices);
  const priceFloat = parseFloat(indices[0].price).toFixed(2);
  return (
    <div>
      <p>
        {index}
        :
        {' '}
        {priceFloat}
      </p>
    </div>
  );
};

export default Indices;
