
import React, { useEffect, useState } from "react";
import { communityMembers, featuresData, ctaData } from "../data/contentData";

const Contents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Community Members Section */}
      <div
        id="community"
        className="w-full justify-items-center content-center px-4 sm:px-8 lg:px-[150px] py-8 sm:py-12 lg:py-16"
      >
        <h3 className="font-sans font-semibold text-lg sm:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-8 text-center">
          Community Members From
        </h3>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-x">
            <div className="flex gap-6 sm:gap-8 lg:gap-12 items-center min-w-full">
              {communityMembers.map((member) => (
                <img
                  key={member.id}
                  src={member.src}
                  alt={member.alt}
                  className="h-8 sm:h-12 lg:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
            <div className="flex gap-6 sm:gap-8 lg:gap-12 items-center min-w-full">
              {communityMembers.map((member) => (
                <img
                  key={`duplicate-${member.id}`}
                  src={member.src}
                  alt={member.alt}
                  className="h-8 sm:h-12 lg:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="w-full pt-5">
        <div className="px-8 sm:px-8 lg:px-[150px]">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              className={`
                flex flex-col lg:grid lg:grid-cols-2 
                min-h-[400px] sm:min-h-[500px] lg:h-[620px] 
                py-8 sm:py-12 lg:py-16 
                gap-6 sm:gap-8 lg:gap-[80px] 
                ${
                  index === 0
                    ? "border-t border-gray-200 lg:border-t-[#212121]"
                    : ""
                }
                ${
                  index === featuresData.length - 1
                    ? "border-b border-gray-200 lg:border-b-[#212121]"
                    : "border-y border-gray-200 lg:border-y-[#212121]"
                }
                items-center
              `}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease-out ${index * 0.2}s`,
              }}
            >
              
              <div className="block lg:hidden w-full">
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="w-full h-[200px] sm:h-[300px] object-cover rounded-lg shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300"
                />
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="font-sans font-semibold text-[20px] sm:text-[28px] leading-[120%] text-black">
                    {feature.title}
                  </h3>
                  <p className="font-sans font-normal text-[14px] sm:text-[18px] leading-[150%] text-gray-700">
                    {feature.description}
                  </p>
                  <p className="font-sans font-normal text-[14px] sm:text-[18px] leading-[150%] text-gray-700">
                    {feature.subDescription}
                  </p>
                </div>
              </div>

              
              <div className="hidden lg:contents">
                {feature.layout === "image-left" ? (
                  <>
                    <img
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className="w-full max-w-[528px] h-[480px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="space-y-6">
                      <h3 className="font-sans font-semibold text-[32px] leading-[120%] text-black">
                        {feature.title}
                      </h3>
                      <p className="font-sans font-normal text-[20px] leading-[150%] text-gray-700">
                        {feature.description}
                      </p>
                      <p className="font-sans font-normal text-[20px] leading-[150%] text-gray-700">
                        {feature.subDescription}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-6">
                      <h3 className="font-sans font-semibold text-[32px] leading-[120%] text-black">
                        {feature.title}
                      </h3>
                      <p className="font-sans font-normal text-[20px] leading-[150%] text-gray-700">
                        {feature.description}
                      </p>
                      <p className="font-sans font-normal text-[20px] leading-[150%] text-gray-700">
                        {feature.subDescription}
                      </p>
                    </div>
                    <img
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className="w-full max-w-[528px] h-[480px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mx-4 sm:mx-8 lg:mx-[150px] my-12 sm:my-16 lg:my-20 bg-[#011533] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] py-8 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-12 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s ease-out 0.5s",
          }}
        >
          <div id="cta" className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h1 className="font-sans font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[120%] text-white">
              {ctaData.title}
            </h1>
            <p className="font-sans font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[150%] text-gray-200">
              {ctaData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
              {ctaData.buttons.map((button) => (
                <button
                  key={button.id}
                  className={`${button.style} font-sans font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Join the Community Section */}
        <div
          className="relative h-[300px] sm:h-[400px] lg:h-[520px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: "url('/fiturs/city.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          
          <div className="lg:hidden relative z-10 text-center px-4 sm:px-8">
            <h2 className="text-white text-[24px] sm:text-[32px] font-bold mb-4 sm:mb-6">
              JOIN THE COMMUNITY
            </h2>
            <button className="bg-white text-[#011533] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow hover:bg-gray-100 transition duration-300 cursor-pointer text-sm sm:text-base">
              Become a Member Now
            </button>
          </div>

          
          <div className="hidden lg:block relative z-10 text-center w-full">
            <div className="grid grid-cols-2 max-w-7xl mx-auto px-[150px]">
              <div className="pr-36">
                <h2 className="text-white text-4xl xl:text-5xl font-bold mb-6">
                  JOIN THE COMMUNITY
                </h2>
                <button className="bg-white text-[#011533] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300 cursor-pointer">
                  Become a Member Now
                </button>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
        }

        .animate-scroll-x:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-scroll-x {
            animation-duration: 15s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll-x {
            animation-duration: 30s;
          }
        }
      `}</style>
    </>
  );
};

export default Contents;