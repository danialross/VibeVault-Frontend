import { useState, useEffect } from "react";

function Recommendation({ title, artist, image, index }) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const delay = index * 250;
    setTimeout(() => setIsRendered(true), delay);
  }, [index]);

  return (
    <div
      className={`flex items-center gap-6 ${
        isRendered ? "scale-100" : "scale-0"
      } transition-transform duration-100 ease-out`}
    >
      <img
        className="w-24 h-24 rounded-xl border-2 border-s-200"
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
