import React from 'react';
import { BottomContentBlock } from './BottomContentBlock';
import { UpperContentBlock } from './UpperContentBlock';
import { SliderSection } from './SliderSection';

export const Main = () => {
  return (
    <main className="main">
      <div className="main__main-block main-block">
        <div className="main-block__container _container">
          <UpperContentBlock />
          <SliderSection />
          <BottomContentBlock />
        </div>
      </div>
    </main>
  );
};
