import React from 'react';
import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

const Indices = () => {
  const indices = useSelector((state) => state.indicesReducer);

  console.log(indices);
  return (
    <div>
      <p>
        Wilshire 5000 total market:
        {indices[0].price}
      </p>
    </div>
  );
};

export default Indices;
