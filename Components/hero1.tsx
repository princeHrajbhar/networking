"use client";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/animations/buisness.json"; // Adjust path as needed

const HeroSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fullText =
      "Figma is finally getting a much awaited capability, thanks to @LottieFiles. Today we are learning how to create a cool heart animation and ...";
    let index = 0;
    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here (100 ms per character)
    return () => clearInterval(interval);
  }, []);

  // Lottie options for the animation
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will play automatically
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-100 px-8">
      {/* Left Side - Enhanced Text Animation and Centered Content with Padding on Left */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start pl-16 space-y-6 lg:space-y-8">
        <h1
          className={`text-4xl lg:text-5xl font-extrabold text-blue-600 opacity-0 transform ${
            animate ? "opacity-100 animate__animated animate__pulse" : "translate-y-6"
          } transition-all duration-1000`}
        >
          Prince Rajbhar
        </h1>
        <p
          className={`text-xl lg:text-3xl text-gray-700 opacity-0 transform ${
            animate ? "opacity-100 animate__animated animate__fadeIn" : "translate-y-6"
          } transition-all duration-1000 delay-200`}
        >
          Web Developer
        </p>
        <p
          className={`text-lg lg:text-2xl text-gray-600 opacity-0 transform ${
            animate ? "opacity-100 animate__animated animate__rubberBand" : "translate-y-6"
          } transition-all duration-1000 delay-400`}
        >
          Data Science & AI Engineer
        </p>
        {/* New Paragraph with Typing Animation */}
        <p
          className={`text-lg lg:text-xl text-gray-600 opacity-0 transform ${
            animate ? "opacity-100 animate__animated animate__fadeIn" : "translate-y-6"
          } transition-all duration-1000 delay-600`}
        >
          {typingText}
        </p>
      </div>

      {/* Right Side - Lottie Animation (Wrapped in div for className) */}
      <div className={`w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 ${animate ? "opacity-100 scale-100" : "scale-50"}`}>
        <Lottie
          options={defaultOptions}
          height={400} // Adjust as necessary
          width={400} // Adjust as necessary
        />
      </div>
    </section>
  );
};

export default HeroSection;
