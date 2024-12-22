import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const HomeUp = ({ homeUp }) => {
  const navigateToTop = () => {
    console.log("navigateToTop called");
    if (homeUp.current) {
      console.log("iff", homeUp.current);
      homeUp.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the viewport
      });
    }
  };
  return (
    <div className="flex justify-center my-5">
      <FaArrowCircleUp className="text-4xl" onClick={navigateToTop} />
    </div>
  );
};

export default HomeUp;
