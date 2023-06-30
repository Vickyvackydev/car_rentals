import { customButtonProbs } from "@/types";
import { title } from "process";
import React from "react";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  rightIcon,
  textStyles,
}: customButtonProbs) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right arrow"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
