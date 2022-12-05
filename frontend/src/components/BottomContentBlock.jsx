import React from 'react';

export const BottomContentBlock = () => {
  return (
    <div className="content-block">
      <h1 className="content-block__title">ut aliquip ex ea commodo consequat</h1>
      <div className="content-block__container__left">
        <div className="container-left__img">
          <img src="images/img/3.png" alt="carousel_img" />
        </div>
        <div className="container-left__abstract">
          <h1 className="container-left__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="container-left__text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className="content-block__container__right">
        <div className="container-right__img">
          <img src="images/img/4.png" alt="carousel_img" />
        </div>
        <div className="container-right__abstract">
          <h1 className="container-right__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="container-right__text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
};
