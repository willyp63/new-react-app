import React from "react";
import { IoIosChatboxes, IoIosPeople, IoIosImages } from "react-icons/io";

const Landing = () => {
  return (
    <div className="flex flex-col items-center landing-bg min-h-screen text-white px-8 lg:px-32 xl:px-64 py-12">
      <img
        className="w-48"
        src="/imgs/n2m-logo-white.png"
        alt="Next 2 Me"
      />

      <div className="flex items-center self-stretch justify-around mt-12 md:mt-16">
        <a
          className="hidden md:block"
          href="http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            className="w-32"
            alt="Get it on Google Play"
            src="/imgs/google-play-button.png"
          />
        </a>

        <div className="relative">
          <img
            className="absolute w-40 transform -translate-x-12 -rotate-15"
            src="/imgs/n2m-screenshot-ios8.png"
            alt="ios 11 screenshot"
          />
          <img
            className="w-40 transform translate-x-12 translate-y-2 rotate-5"
            src="/imgs/n2m-screenshot-ios11.png"
            alt="ios 11 screenshot"
          />
        </div>

        <a
          className="hidden md:block"
          href="https://www.apple.com/ios/app-store/"
        >
          <img
            className="w-32"
            alt="Download on the App Store"
            src="/imgs/app-store-button.svg"
          />
        </a>
      </div>

      <div className="md:hidden flex justify-around self-stretch mt-12">
        <a href="http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            className="w-32"
            alt="Get it on Google Play"
            src="/imgs/google-play-button.png"
          />
        </a>
        <a href="https://www.apple.com/ios/app-store/">
          <img
            className="w-32"
            alt="Download on the App Store"
            src="/imgs/app-store-button.svg"
          />
        </a>
      </div>

      <ul className="flex flex-col sm:flex-row mt-12 md:mt-16">
        <li className="flex flex-col items-center text-center text-lg">
          <IoIosChatboxes className="w-12 h-12 mb-2" />
          <p>
            Next2Me is a place to meet new people and talk about what matters to
            you
          </p>
        </li>
        <li className="flex flex-col items-center text-center my-8 sm:my-0 sm:mx-12 text-lg">
          <IoIosPeople className="w-12 h-12 mb-2" />
          <p>
            Chat with someone completely random or someone who shares your
            interests
          </p>
        </li>
        <li className="flex flex-col items-center text-center text-lg">
          <IoIosImages className="w-12 h-12 mb-2" />
          <p>Share photos, video, and audio with the people that you meet</p>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
