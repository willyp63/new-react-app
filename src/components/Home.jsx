import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaPhotoVideo,
  FaUserFriends,
  FaTwitter,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Banner Img */}
      <div
        className="w-full h-128 bg-cover bg-top flex justify-center relative"
        style={{ backgroundImage: "url(imgs/obey-2.jpg)" }}
      >
        <div className="w-full max-w-9xl relative m-12 md:m-16 lg:m-20">
          <div className="absolute top-0 left-0">
            <h1 className="text-blue-300 font-semibold italic text-5xl lg:text-6xl">
              OBEY BLU
            </h1>
            <h2 className="text-white text-2xl lg:text-3xl italic">
              Salvation Through Financial Sacrifice
            </h2>
          </div>
        </div>
        <img
          src="/imgs/obey-logo.png"
          alt="obey blu"
          className="absolute bottom-0 right-0 mr-4 mb-4 h-10"
        />
      </div>

      {/* Nav Bar */}
      <nav className="bg-blue-1300 md:h-20 py-4 pl-8 md:pl-0 flex flex-col md:flex-row justify-center items-center text-white text-lg lg:text-xl font-semibold">
        <Link
          to="/"
          className="py-2 md:px-4 lg:px-6 transition-all duration-200 transform hover:scale-105 hover:text-gray-300"
        >
          HOME
        </Link>
        <a
          href="https://iwantclips.com/store/823228/Obey-Blu-Dahlia/"
          className="py-2 md:px-4 lg:px-6 transition-all duration-200 transform hover:scale-105 hover:text-gray-300"
        >
          CLIPS
        </a>
        <a
          href="https://stars.avn.com/BluDahlia"
          className="py-2 md:px-4 lg:px-6 transition-all duration-200 transform hover:scale-105 hover:text-gray-300"
        >
          FANCLUB
        </a>
        <a
          href="https://www.sextpanther.com/Blu-Dahlia"
          className="py-2 md:px-4 lg:px-6 transition-all duration-200 transform hover:scale-105 hover:text-gray-300"
        >
          TEXT/CALL
        </a>
      </nav>

      {/* Block #1 */}
      <div
        className="w-full bg-cover bg-right flex justify-center p-12 md:p-16 lg:p-20"
        style={{ backgroundImage: "url(imgs/obey-1.jpg)" }}
      >
        <div className="max-w-9xl flex-1 flex items-center justify-center md:justify-start py-24">
          <div className="max-w-lg relative">
            <div className="bg-white py-6 px-10 md:py-8 md:px-12 rounded-sm flex flex-col relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Beta Therapy
              </h2>
              <p className="mt-4 text-lg md:text-xl font-light">
                Of course, you are beta looking for answers. Frustrated and confused, I have some guidance for you.
              </p>
              <a
                className="bg-blue-500 px-12 py-4 md:px-16 md:py-6 text-white text-md md:text-lg rounded-sm self-end mt-8 font-semibold transition-all duration-200 transform hover:scale-105 hover:bg-blue-400"
                href="https://iwantclips.com/store/item/2232780"
              >
                Learn More
              </a>
            </div>
            <div
              className="bg-blue-1300 w-40 h-40 absolute"
              style={{ top: -24, left: -24 }}
            />
            <div
              className="bg-blue-1300 w-40 h-40 absolute"
              style={{ bottom: -24, right: -24 }}
            />
          </div>
        </div>
      </div>

      {/* Block #2 */}
      <div
        className="bg-blue-1300 w-full bg-cover bg-left flex justify-center p-8 md:12 lg:p-16"
        style={{ backgroundImage: "url(imgs/obey-3.jpg)" }}
      >
        <div className="flex justify-center md:justify-end flex-1 max-w-9xl">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-300 mb-12">
              OFFERS & SERVICES
            </h2>
            <div
              className="flex items-stretch flex-wrap w-80 md:w-160"
              style={{ marginRight: -24, marginBottom: -24 }}
            >
              <div
                className="w-1/2 md:w-1/3"
                style={{ paddingRight: 24, paddingBottom: 24 }}
              >
                <a href="https://www.sextpanther.com/Blu-Dahlia" className="bg-white rounded-sm p-4 md:p-8 w-full h-full flex flex-col items-center transform transition-all duration-200 hover:scale-105 hover:bg-gray-200">
                  <FaPhone size={48} color="#776dd1" />
                  <p className="mt-4 text-lg md:text-xl font-semibold text-center">
                    Text or Call
                  </p>
                </a>
              </div>
              <div
                className="w-1/2 md:w-1/3"
                style={{ paddingRight: 24, paddingBottom: 24 }}
              >
                <a href="https://iwantclips.com/store/823228/Obey-Blu-Dahlia/" className="bg-white rounded-sm p-4 md:p-8 w-full h-full flex flex-col items-center transform transition-all duration-200 hover:scale-105 hover:bg-gray-200">
                  <FaPhotoVideo size={48} color="#776dd1" />
                  <p className="mt-4 text-lg md:text-xl font-semibold text-center">
                    Photos and Videos
                  </p>
                </a>
              </div>
              <div
                className="w-1/2 md:w-1/3"
                style={{ paddingRight: 24, paddingBottom: 24 }}
              >
                <a href="https://stars.avn.com/BluDahlia" className="bg-white rounded-sm p-4 md:p-8 w-full h-full flex flex-col items-center transform transition-all duration-200 hover:scale-105 hover:bg-gray-200">
                  <FaUserFriends size={48} color="#776dd1" />
                  <p className="mt-4 text-lg md:text-xl font-semibold text-center">
                    Join the
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-center">
                    Fan Club
                  </p>
                </a>
              </div>
              <div
                className="w-1/2 md:w-1/3"
                style={{ paddingRight: 24, paddingBottom: 24 }}
              >
                <a href="https://twitter.com/ObeyBluDahlia" className="bg-white rounded-sm p-4 md:p-8 w-full h-full flex flex-col items-center transform transition-all duration-200 hover:scale-105 hover:bg-gray-200">
                  <FaTwitter size={48} color="#776dd1" />
                  <p className="mt-4 text-lg md:text-xl font-semibold text-center">
                    Follow on Twitter
                  </p>
                </a>
              </div>
              <div
                className="w-1/2 md:w-1/3"
                style={{ paddingRight: 24, paddingBottom: 24 }}
              >
                <a href="https://www.instagram.com/obeybludahlia/?hl=en" className="bg-white rounded-sm p-4 md:p-8 w-full h-full flex flex-col items-center transform transition-all duration-200 hover:scale-105 hover:bg-gray-200">
                  <FaInstagram size={48} color="#776dd1" />
                  <p className="mt-4 text-lg md:text-xl font-semibold text-center">
                    Follow on Instagram
                  </p>
                </a>
              </div>
              <div
                className="w-1/2 md:w-1/3"
                style={{ paddingRight: 24, paddingBottom: 24 }}
              >
                <a href="https://www.reddit.com/user/obeybludahlia/" className="bg-white rounded-sm p-4 md:p-8 w-full h-full flex flex-col items-center transform transition-all duration-200 hover:scale-105 hover:bg-gray-200">
                  <FaReddit size={48} color="#776dd1" />
                  <p className="mt-4 text-lg md:text-xl font-semibold text-center">
                    Follow on Reddit
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block #3 */}
      <div className="p-8 md:12 lg:p-16 flex justify-center">
        <div className="max-w-9xl flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:mr-24 lg:mr-32 mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
              Goon for your Goddess
            </h2>
            <p className="text-lg md:text-xl font-light">         
              Goon on, My gooning bitch. In My presence, your mind turns to mush, your jaw drops and your drool - you are My gooning plaything. It's so fun fucking with your mind when you don't even know what's happening!
              <br />
              <br />
              Okay, I get it. I want you to be a fulltime cock slut, but you are stalling. Here are some things to do in the meantime, ways to get your mind prepped for when the day really comes (and it will come), so you completely ready to embrace the cock!
              <br />
              <br />
              I want you absolutely suffering for Me. Worshipping Me by going further and really fucking your mind up. I want you absolutely desperate and woozy with desire. That's why you are going to binge porn for Me until you are so delirious with arousal... only then, you will realize binge has begun!
            </p>
          </div>
          <div className="m-8 relative">
            <div
              style={{ backgroundImage: "url(imgs/obey-4.jpg)" }}
              className="w-48 h-96 lg:w-80 lg:h-128 bg-cover bg-center relative z-10"
            />
            <div
              className="bg-blue-1300 w-40 h-40 absolute"
              style={{ top: -24, left: -24 }}
            />
            <div
              className="bg-blue-1300 w-40 h-40 absolute"
              style={{ bottom: -24, right: -24 }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white p-12 flex justify-center">
        <div className="max-w-4xl flex-1">
          <div className="flex mb-4">
            <div className="flex-1 flex flex-col">
              <a
                href="https://www.sextpanther.com/Blu-Dahlia"
                className="text-sm md:text-base font-semibold mb-3 transition-all duration-200 hover:text-gray-300 hover:underline"
              >
                Text or Call
              </a>
              <a
                href="https://iwantclips.com/store/823228/Obey-Blu-Dahlia/"
                className="text-sm md:text-base font-semibold mb-3 transition-all duration-200 hover:text-gray-300 hover:underline"
              >
                Photos and Videos
              </a>
              <a
                href="https://stars.avn.com/BluDahlia"
                className="text-sm md:text-base font-semibold mb-3 transition-all duration-200 hover:text-gray-300 hover:underline"
              >
                Fan Club
              </a>
              <a
                href="/"
                className="text-sm md:text-base font-semibold mb-3 transition-all duration-200 hover:text-gray-300 hover:underline"
              >
                Blog
              </a>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-col">
                <a
                  href="\"
                  className="text-sm md:text-base font-semibold mb-3 transition-all duration-200 hover:text-gray-300 hover:underline"
                >
                  Donations
                </a>
                <a
                  href="\"
                  className="text-sm md:text-base font-semibold mb-3 transition-all duration-200 hover:text-gray-300 hover:underline"
                >
                  Other Services
                </a>
              </div>
              <div className="flex my-3">
                <a
                  href="https://www.instagram.com/obeybludahlia/?hl=en"
                  className="mr-2 transform transition-all duration-200 hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com/ObeyBluDahlia"
                  className="mr-2 transform transition-all duration-200 hover:scale-110"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.reddit.com/user/obeybludahlia/"
                  className="mr-2 transform transition-all duration-200 hover:scale-110"
                >
                  <FaReddit size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center border-t-1 border-white pt-8">
            <p className="text-sm md:text-base text-center">
              2020 © obey-blu.herokuapp.com - All Rights Reserved.
            </p>
            <p className="text-sm md:text-base font-semibold text-center mt-2">
              powered by Foxxie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
