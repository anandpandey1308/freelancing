import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SignUpPage = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("instagram");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const countryCodes = ["+1", "+91", "+44", "+61"];
  const socialMediaOptions = [
    { value: "instagram", label: "Instagram", icon: faInstagram },
    { value: "twitter", label: "Twitter", icon: faTwitter },
    { value: "facebook", label: "Facebook", icon: faFacebook },
    { value: "tiktok", label: "TikTok", icon: faTiktok },
    { value: "linkedin", label: "LinkedIn", icon: faLinkedin },
  ];

  const images = [
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46944GlobalSignin4.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46942GlobalSignin2.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46943GlobalSignin3.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46945GlobalSignin.png",
    "https://d3qp9zvlyuxos1.cloudfront.net/Group+46942GlobalSignin2.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectSocialMedia = (platform) => {
    setSelectedSocialMedia(platform);
    setDropdownOpen(false);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-start"
      style={{
        backgroundImage:
          "url(https://d3qp9zvlyuxos1.cloudfront.net/Gradient+background.svg)",
      }}
    >
      <div className="flex justify-center items-start min-h-screen pt-8">
        <div className="shadow-xl flex flex-col lg:flex-row bg-white rounded-[24px] w-full max-w-[1000px] h-[692px] relative">
          <div
            className="relative flex flex-col flex-1 lg:w-1/2 p-6 md:p-12 pb-6 rounded-tl-[24px] rounded-bl-[24px] w-full"
            style={{ paddingBottom: "24px" }}
          >
            <div className="w-full flex flex-col items-center justify-center gap-6 mt-4">
              <div className="flex flex-col items-center justify-center gap-1">
                <h2 className="text-xl md:text-2xl font-bold">
                  Let's create your SuperProfile!
                </h2>
                <p className="text-base font-semibold text-gray-500">
                  Your all-in-one digital store to showcase and sell
                </p>
              </div>

              <div className="flex flex-col gap-1 w-[85%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-2 p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex border border-gray-300 rounded mt-2.5 text-sm">
                  <select
                    className="p-2"
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                  >
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-2 flex-1"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center justify-start border border-gray-300 rounded-lg relative w-full mt-2.5 text-sm">
                  <button
                    type="button"
                    className="flex items-center p-2"
                    onClick={handleDropdownToggle}
                  >
                    {selectedSocialMedia ? (
                      <FontAwesomeIcon
                        icon={
                          socialMediaOptions.find(
                            (option) => option.value === selectedSocialMedia
                          )?.icon
                        }
                        className="text-xl"
                      />
                    ) : (
                      <span>Select Platform</span>
                    )}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-2.5 text-sm w-full">
                      {socialMediaOptions.map((platform) => (
                        <div
                          key={platform.value}
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() =>
                            handleSelectSocialMedia(platform.value)
                          }
                        >
                          <FontAwesomeIcon
                            icon={platform.icon}
                            className="mr-2"
                          />
                          {platform.label}
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Username"
                    className="p-2 flex-1 rounded-r-lg w-[80%]"
                  />
                </div>
                <select className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" disabled>
                    Select Goals
                  </option>
                  <option value="goal1">Goal 1</option>
                  <option value="goal2">Goal 2</option>
                  <option value="goal3">Goal 3</option>
                </select>
                <input
                  type="text"
                  placeholder="How did you hear about us?"
                  className="w-full mt-2.5 text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="w-[85%] flex justify-center text-sm items-center gap-2 bg-slate-900 text-white py-2 px-4 rounded-full">
                Get Started
              </button>
              <p className="text-center text-gray-600 font-medium text-sm mt-2">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>

          <div className="relative flex flex-1 lg:w-1/2 rounded-tr-[24px] rounded-br-[24px] w-full overflow-hidden hidden lg:flex">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://superprofile.bio/_next/static/media/super-profile-bg.e492fb38.png')"}}></div>
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="w-full h-full relative">
                <img
                  src={images[currentImageIndex]}
                  alt={`Slide ${currentImageIndex + 1}`}
                  className={`w-full h-full object-contain transition-opacity duration-1000 ${
                    fadeOut ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? "bg-white" : "bg-gray-500 bg-opacity-50"
                      } transition-all duration-300`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
