import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Button({ index }) {
  return (
    <Link
      to={`/sports${index}`}
      className="w-[200px] px-4 py-2 bg-zinc-100 hover:bg-green-400 
                 text-black rounded-full mx-7 flex gap-4 items-center 
                 justify-between transform hover:scale-110 
                 transition-transform duration-200"
    >
      <span className="text-sm font-semibold">Show news</span>
      <FaArrowRightLong />
    </Link>
  );
}

export default Button;
