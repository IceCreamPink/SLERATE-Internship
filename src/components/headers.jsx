import React, { useEffect, useState } from "react";

const Headers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const slideInLeft = {
    transform: isVisible ? "translateX(0)" : "translateX(-40px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s ease-out",
  };

  const slideInRight = {
    transform: isVisible ? "translateX(0)" : "translateX(40px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 1s ease-out 0.3s",
  };

  return (
    <div
      id="home"
      className="w-full min-h-[500px] sm:min-h-[600px] lg:h-[650px] mt-16 sm:mt-20"
    >
      <div className="bg-[url(/headers/bg.png)] h-full w-full bg-cover bg-center relative overflow-hidden">
        <div className="lg:hidden flex flex-col h-full w-full relative px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center mb-8 sm:mb-12" style={slideInLeft}>
            <h1 className="text-white font-sans font-bold text-[24px] sm:text-[32px] leading-[130%] tracking-0 mb-4">
              Everything You Need to <br className="hidden sm:block" />
              Accelerate Sales, <br className="hidden sm:block" />
              In One Platform.
            </h1>
            <p className="text-white font-sans font-normal text-[14px] sm:text-[18px] leading-[140%] tracking-0 px-2">
              Slerate Sales Boost gives your team the clarity, automation, and
              coaching they need to scale revenue—without increasing headcount.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <button
              type="submit"
              className="bg-white rounded-[30px] h-[43px] w-[156px] font-sans text-[16px] cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
            <button
              type="submit"
              className="bg-transparent border-2 border-white text-white rounded-[30px] h-[43px] w-[200px] sm:w-[262px] font-sans text-[14px] sm:text-[16px] cursor-pointer px-4 py-3 flex flex-row gap-2 sm:gap-3 items-center justify-center transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105"
            >
              <img
                src="/vector/play.png"
                className="w-3 h-3 sm:w-4 sm:h-4"
                alt="play"
              />
              <p>Watch Demo</p>
            </button>
          </div>

          <div
            className="flex justify-center items-center flex-1"
            style={slideInRight}
          >
            <img
              src="/headers/task.png"
              alt="Task illustration"
              className="w-full max-w-[300px] sm:max-w-[400px] h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 h-full w-full relative px-8 xl:px-[150px]">
          <div className="pl-8 xl:pl-40 mt-20" style={slideInLeft}>
            <div>
              <h1 className="text-white font-sans font-bold text-[32px] xl:text-[40px] leading-[140%] tracking-0">
                Everything You Need to <br /> Accelerate Sales,
                <br /> In One Platform.
              </h1>
              <p className="text-white font-sans font-normal text-[18px] xl:text-[20px] leading-[140%] tracking-0 mt-4">
                Slerate Sales Boost gives your team the clarity,
                <br /> automation, and coaching they need to scale <br />
                revenue—without increasing headcount.
              </p>
            </div>

            <div className="flex mt-10">
              <button
                type="submit"
                className="bg-white rounded-[30px] h-[43px] w-[156px] font-sans text-[16px] cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </button>
              <button
                type="submit"
                className="bg-transparent border-2 border-white text-white rounded-[30px] h-[43px] w-[262px] font-sans text-[16px] cursor-pointer ml-4 px-[32px] py-[12px] flex flex-row gap-3 items-center justify-center transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105"
              >
                <img src="/vector/play.png" className="w-4 h-4" alt="play" />
                <p>Watch Product Demo</p>
              </button>
            </div>
          </div>

          <div
            className="relative h-full w-full flex justify-start items-end"
            style={slideInRight}
          >
            <img
              src="/headers/task.png"
              alt="Task illustration"
              className="w-[600px] xl:w-[810px] h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
