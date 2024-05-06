import { faX, faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
function Selections({ title, artist, genre, image, handleRemove }) {
  const [onHover, setOnHover] = useState(false);
  const [scale, setScale] = useState("scale-0");

  useEffect(() => {
    setScale("scale-100");
    setTimeout(() => {
      return;
    }, 250);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${scale} transition-transform ease-out duration-250 `}
    >
      <div
        className={`relative w-32 bg-red-500 rounded-xl `}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <div
          className={` flex justify-center items-center bg-dark-violet rounded-xl w-32 h-32 object-cover overflow-hidden ${
            onHover ? "opacity-50 blur scale-105 grayscale" : ""
          } transition-all duration-100 ease-out`}
        >
          {image ? (
            <img src={image} alt={`${title} cover`} className="rounded-xl" />
          ) : (
            <FontAwesomeIcon
              icon={faRecordVinyl}
              color="white"
              className="w-full h-full p-4"
            />
          )}
        </div>

        {onHover && (
          <button
            className={`flex justify-center items-center absolute top-1/3 left-1/3 bg-red-500 rounded-full w-12 h-12 ${
              onHover ? "opacity-100" : "opacity-0"
            } transition-all duration-100`}
            onClick={() => {
              setScale("scale-0");
              setTimeout(() => handleRemove(), 250);
            }}
          >
            <FontAwesomeIcon icon={faX} color="white" />
          </button>
        )}
      </div>

      <div className="h-full w-28 text-center font-nunito">
        {title && (
          <>
            <div className=" text-sm line-clamp-2 mb-2">{`${title}`}</div>
            <div className="text-xs line-clamp-2">{`- ${artist}`}</div>
          </>
        )}
        {genre && <div className=" text-sm line-clamp-2">{`${genre}`}</div>}
        {!title && !genre && (
          <div className="text-sm line-clamp-2">{`${artist}`}</div>
        )}
      </div>
    </div>
  );
}

export default Selections;
