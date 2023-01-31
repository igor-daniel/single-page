import React from "react";
import './main.css'
import ImgDesktop from '../img/image-hero-desktop.png'
import ImgMobile from '../img/image-hero-mobile.png'
import data from '../img/client-databiz.svg'
import audio from '../img/client-audiophile.svg'
import meet from '../img/client-meet.svg'
import maker from '../img/client-maker.svg'

export const Main = () => {
  return (
    <main>
      <div className="content-main">
        <div className="main-h1">
          <h1>Make</h1>
          <h1>remote  work</h1>
        </div>
        <div className="p">
          <p>Get your team in sync, no matter your location.</p>
          <p>Streamline processes, create team rituals, and</p>
          <p>watch productivity soar.</p>
        </div>
        <button>Lear more</button>
        <div className="block-images">
          <img src={data} alt="Data" />
          <img src={audio} alt="audio" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </div>
      <div className="image">
        <picture>
          <source media="(max-width: 400px)" srcSet={ImgMobile} />
          <img src={ImgDesktop} alt="image-desktop" />
        </picture>

      </div>
    </main>
  );
}