import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Selections({ index, title, artist, genre, image, handleRemove }) {
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <div
        className=" relative w-32 bg-red-500 rounded-lg"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <img
          src={image}
          alt={`${title} cover`}
          className={`rounded-lg ${
            onHover ? "opacity-50 blur scale-105 grayscale" : ""
          } transition-all duration-25`}
        />
        {onHover && (
          <button
            className={`flex justify-center items-center absolute top-1/3 left-1/3 bg-red-500 rounded-full w-12 h-12 ${
              onHover ? "opacity-100" : "opacity-0"
            } transition-all duration-25`}
            onClick={() => handleRemove(index)}
          >
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        )}
      </div>

      <div className="h-full w-28 text-center font-nunito">
        {title && (
          <div className=" text-sm line-clamp-4 mb-2">{`${title}`}</div>
        )}
        {genre && (
          <div className=" text-sm line-clamp-4 mb-2">{`${genre}`}</div>
        )}
        <div className="text-xs line-clamp-2">{`- ${artist}`}</div>
      </div>
    </>
  );
}

export default Selections;
