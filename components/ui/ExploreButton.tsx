"use client";

import Image from "next/image";

const ExploreButton = () => {
  return (
    <div
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("button clicked")}
    >
      <a href="#events">
        Explore Events
        <Image 
          src="/icons/arrow-down.svg" 
          width={16} 
          height={16} 
          alt="Arrow Down" 
        />
      </a>
    </div>
  );
};

export default ExploreButton;
