// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

// Replace with your actual image paths
import hero1 from "../assets/hotel.jpg";
import hero2 from "../assets/hotel2.jpg";
import hero3 from "../assets/hotel3.jpg";

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const btnText = document.querySelector("#bookNowText");
    if (btnText) {
      btnText.innerHTML = btnText.innerHTML
        .split("")
        .map(
          (character, index) =>
            `<span class="absolute origin-[40px_40px] text-white" style="transform: rotate(${index * 15}deg) translateX(40px);">${character}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div className="py-20 mt-10">
      <div className="container px-4 mx-auto">
        <div className="w-full mb-8 text-left">
          <h1 className="font-bold leading-tight text-[#4A4A4A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Discover Nature Lover’s Resort in Horana, Sri Lanka
            <br />
            <span
              className="text-[#01cf01]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              your serene escape into nature.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#1E1E1E]">
            Just a short drive from Colombo, our lush retreat offers everything
            from Sri Lanka’s largest infinity pool to jungle adventures and
            peaceful mountain views. Whether it’s family fun, birdwatching, or
            quiet moments by the river, every experience is designed to revive
            your spirit.
          </p>
        </div>

        <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg">
          <img
            src={heroImages[currentIndex]}
            alt="Hero"
            className="w-full h-60 sm:h-80 md:h-[450px] object-cover rounded-lg transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
