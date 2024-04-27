import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faRecordVinyl,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
function Banner({ type }) {
  const icons = [faMusic, faMicrophoneLines, faRecordVinyl];
  const slogans = [
    "Send a Track, Receive Your Musical Match.",
    "Connect with an Artist, Discover Similar Talent.",
    "Enter a Genre, Explore its Signature Tracks.",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center bg-dark-violet pt-16 pb-8">
      <div className="text-9xl p-4 text-sky-blue font-satisfy">VibeVault</div>
      <div className="text-5xl p-4 text-white font-nunito">
        Uncover Music That Match Your Beat.{" "}
      </div>
      <div className="flex flex-row p-4">
        {icons.map((item, index) => {
          return (
            <div className="flex flex-col w-72 h-72 justify-center items-center m-4 border-4 border-white rounded-2xl ">
              <FontAwesomeIcon
                className="pb-4"
                icon={item}
                size="6x"
                color="white"
              />
              <div className="pt-4 font-nunito text-white text-xl text-center text-nowrap">
                {slogans[index].split(",").map((item) => {
                  return <div>{item}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
