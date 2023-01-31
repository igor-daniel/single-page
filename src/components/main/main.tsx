import React from "react";
import './main.css'
import ImgDesktop from '../img/image-hero-desktop.png'
import data from '../img/client-databiz.svg'
import audio from '../img/client-audiophile.svg'
import meet from '../img/client-meet.svg'
import maker from '../img/client-maker.svg'

export const Main = () => {
  return (
    <main>
      <div className="content-main">
        <h1>Make <br /> remote  work </h1>
        <p>Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br />
          watch productivity soar.</p>
        <button>Lear more</button>

        <div className="block-images">
          <img src={data} />
          <img src={audio} />
          <img src={meet} />
          <img src={maker} />
        </div>
      </div>
      <div className="image">
        <img src={ImgDesktop} alt="" />
      </div>
    </main>
  );
}