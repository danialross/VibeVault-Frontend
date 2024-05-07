import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faRecordVinyl,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";

function Info() {
  const icons = [faMusic, faMicrophoneLines, faRecordVinyl];
  const slogans = [
    "Swap Tracks, Find Your Match.",
    "Choose Artists, Find Similar Ones.",
    "Pick a Genre, Hear Key Tracks.",
  ];
  return (
    <div className=" flex flex-col gap-8 mr-8">
      {icons.map((item, index) => {
        return (
          <div
            className="flex flex-col w-48 h-48 justify-center items-center  border-4 border-white rounded-2xl "
            key={index}
          >
            <FontAwesomeIcon icon={item} size="4x" color="white" />
            <div className="pt-4 font-nunito text-white text-md text-center text-nowrap">
              {slogans[index].split(",").map((item) => {
                return <div key={item}>{item}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Info;
