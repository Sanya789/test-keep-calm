import React from 'react';
import { Item } from './Item';

const imageArray = [
  { id: 1, img: 'slider_1.png' },
  { id: 2, img: 'slider_2.png' },
  { id: 3, img: 'slider_3.png' },
  { id: 4, img: 'slider_4.png' },
  { id: 5, img: 'slider_5.png' },
  { id: 6, img: 'slider_6.png' },
  { id: 7, img: 'slider_7.png' },
  { id: 8, img: 'slider_8.png' },
  { id: 9, img: 'slider_9.png' },
  { id: 10, img: 'slider_10.png' },
  { id: 11, img: 'slider_11.png' },
  { id: 12, img: 'slider_12.png' },
];

export const SliderSection = () => {
  return (
    <>
      <section className="blank content-block">
        <h1 className="blanc__content-block__title">ut aliquip ex ea commodo consequat</h1>
      </section>
      <section className="horizontal">
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            {imageArray.map((el) => (
              <Item key={el.id} imgWay={`images/slider/${el.img}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
