import { useState } from "react";
import Arrow from "../icons/Arrow";

function Button({ text, dark }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`w-60  border rounded px-5 py-2 text-lg font-medium  flex items-center  cursor-pointer ${
        dark ? "bg-[#222] text-white" : "bg-white text-[#222]"
      } gap-0 hover:gap-10 justify-center  transition-all duration-300`}
    >
      {text}
      <span
        className={`${
          hover ? "opacity-100" : "opacity-0 -z-10 absolute"
        } transition-all duration-300`}
      >
        <Arrow sizes={20} />
      </span>
    </button>
  );
}

export default Button;
