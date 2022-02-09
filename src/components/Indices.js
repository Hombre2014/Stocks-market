import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IndicesFetch from '../redux/IndicesFetch';

const Indices = (ticker) => {
  const { index } = ticker;
  const currentIndex = useSelector((state) => state.indicesReducer);

  console.log('This is the currentIndex: ', currentIndex);

  const dispatch = useDispatch();

  console.log('This the ticker object - index: name ', ticker);
  console.log('This is the index: i.e. ', index);

  useEffect(() => {
    dispatch(IndicesFetch(index));
  }, []);

  const priceFloat = parseFloat(currentIndex[0].price).toFixed(2);

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
