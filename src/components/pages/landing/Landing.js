import React from "react";
import { IoIosChatboxes, IoIosPeople, IoIosImages } from "react-icons/io";

const GOOGLE_PLAY_URL = "https://play.google.com/store?hl=en_US";
const APP_STORE_URL = "https://www.apple.com/ios/app-store/";

const Landing = () => {
  return (
    <div className="landing-page min-h-screen px-8 lg:px-32 xl:px-64 py-12 flex flex-col items-center text-white">
      <img className="w-48" src="/imgs/n2m-logo-white.png" alt="Next 2 Me" />

      <div className="flex items-center self-stretch justify-around mt-12 md:mt-16">
        <a className="app-store-btn hidden md:block" href={GOOGLE_PLAY_URL}>
          <img alt="Get it on Google Play" src="/imgs/google-play-button.png" />
        </a>

        <div className="relative">
          <img
            className="absolute w-40 transform -translate-x-12 -rotate-15"
            src="/imgs/n2m-screenshot-ios8.png"
            alt="group chat screenshot"
          />
          <img
            className="w-40 transform translate-x-12 translate-y-2 rotate-5"
            src="/imgs/n2m-screenshot-ios11.png"
            alt="join group screenshot"
          />
        </div>

        <a className="app-store-btn hidden md:block" href={APP_STORE_URL}>
          <img
            alt="Download on the App Store"
            src="/imgs/app-store-button.svg"
          />
        </a>
      </div>

      <div className="md:hidden flex justify-around self-stretch mt-12">
        <a className="app-store-btn" href={GOOGLE_PLAY_URL}>
          <img alt="Get it on Google Play" src="/imgs/google-play-button.png" />
        </a>
        <a className="app-store-btn" href={APP_STORE_URL}>
          <img
            alt="Download on the App Store"
            src="/imgs/app-store-button.svg"
          />
        </a>
      </div>

      <ul className="flex flex-col sm:flex-row mt-12 md:mt-16">
        <li className="detail-item">
          <IoIosChatboxes />
          <p>
            Next2Me is a place to meet new people and talk about what matters to
            you
          </p>
        </li>
        <li className="detail-item my-8 sm:my-0 sm:mx-12">
          <IoIosPeople />
          <p>
          Chat with someone near you, build relationships and make friends in your community
          </p>
        </li>
        <li className="detail-item">
          <IoIosImages />
          <p>Share photos, video, and audio with the people that you meet</p>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
