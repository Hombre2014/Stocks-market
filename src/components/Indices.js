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

  // const currentIndex = useSelector((state) => state.price);

  // console.log('This is the currentIndex: ', currentIndex);

  // const priceFloat = parseFloat(currentIndex[0].price).toFixed(2);

  const indices = useSelector((state) => state.indicesReducer);

  console.log(indices);
  return (
    <div>
      <p>
        {index}
        :
        {' '}
        {indices[0].price}
      </p>
    </div>
  );
};

export default Indices;
