import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
function Selections({ title, artist, genre, image, handleRemove }) {
  const [onHover, setOnHover] = useState(false);
  const [curOpacity, setCurOpacity] = useState(0);

  useEffect(() => {
    setCurOpacity(100);
    setTimeout(() => {
      return;
    }, 250);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 opacity-${curOpacity} transition-opacity ease-out duration-250`}
    >
      <div
        className={`relative w-32 bg-red-500 rounded-lg`}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <img
          src={image}
          alt={`${title} cover`}
          className={`rounded-lg w-32 h-32 object-cover ${
            onHover ? "opacity-50 blur scale-105 grayscale" : ""
          } transition-all duration-100 ease-out`}
        />
        {onHover && (
          <button
            className={`flex justify-center items-center absolute top-1/3 left-1/3 bg-red-500 rounded-full w-12 h-12 ${
              onHover ? "opacity-100" : "opacity-0"
            } transition-all duration-100`}
            onClick={() => {
              setCurOpacity(0);
              setTimeout(() => handleRemove(), 100);
            }}
          >
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        )}
      </div>

      <div className="h-full w-28 text-center font-nunito">
        {title && (
          <>
            <div className=" text-sm line-clamp-4 mb-2">{`${title}`}</div>
            <div className="text-xs line-clamp-2">{`- ${artist}`}</div>
          </>
        )}
        {genre && <div className=" text-sm line-clamp-4">{`${genre}`}</div>}
        {!title && !genre && (
          <div className="text-sm line-clamp-2">{`${artist}`}</div>
        )}
      </div>
    </div>
  );
}

export default Selections;
