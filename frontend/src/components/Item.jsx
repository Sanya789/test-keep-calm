import React from 'react';

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.imgWay} alt="carousel_img" />
    </div>
  );
};
