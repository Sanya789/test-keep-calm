import React from 'react';
// import logo from '../assets/img/Circeya.svg';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__container _container">
          <a href="" className="header__logo">
            <img src="images/img/Circeya.svg" alt="carousel_img" />
          </a>
          <div className="header__phone">
            <img src="images/img/Vector.svg"/>
            <p>+7 (495) 495-49-54</p>
          </div>
        </div>
      </header>
    </div>
  );
};
