import { useState, useEffect } from "react";

function Recommendation({ title, artist, image }) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <div
      className={`flex items-center gap-6 ${
        isRendered ? "scale-100" : "scale-0"
      } transition-transform duration-100 ease-out`}
    >
      <img
        className="w-24 h-24 rounded-xl"
        src={image}
        alt={`${artist ? title : artist} cover`}
      />
      <div className=" flex flex-col">
        <div className="line-clamp-1">{artist ? title : artist}</div>
        {artist && <div className="line-clamp-1">{artist}</div>}
      </div>
    </div>
  );
}
export default Recommendation;
