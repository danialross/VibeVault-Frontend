import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [isTrackActive, setIsTrackActive] = useState(true);
  const [isArtistActive, setIsArtistActive] = useState(false);
  const [isGenreActive, setIsGenreActive] = useState(false);
  const [search, setSearch] = useState("");

  const options = [
    { type: "Track", state: isTrackActive },
    { type: "Artist", state: isArtistActive },
    { type: "Genre", state: isGenreActive },
  ];

  const toggleSelections = (selection) => {
    if (selection === "Track") {
      setIsTrackActive(true);
      setIsArtistActive(false);
      setIsGenreActive(false);
    } else if (selection === "Artist") {
      setIsTrackActive(false);
      setIsArtistActive(true);
      setIsGenreActive(false);
    } else if (selection === "Genre") {
      setIsTrackActive(false);
      setIsArtistActive(false);
      setIsGenreActive(true);
    } else {
      //do nothing
      return;
    }
  };

  const fetchSuggestions = () => {
    const url = `${process.env.API_URL}/get-metadata`;
    let parameters = "";
  };

  return (
    <div className="bg-dark-violet">
      <div className="w-full flex flex-col justify-start items-center bg-gray-200 p-4 h-full rounded-2xl">
        <div className="flex justify-center w-full h-3/5 bg-white rounded-xl p-2 mb-4 ">
          <div className="text-dark-violet rounded-md text-lg font-nunito text-center mb-4 ">
            Selections
          </div>
        </div>
        <div className="flex justify-center w-full pb-4">
          <div className="mr-4 ">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value={"default"}>Recommendations</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex relative font-medium text-center mr-4 rounded-xl bg-gray-400 border-gray-300 z-10">
            {options.map((item, index) => {
              return (
                <div
                  className={` p-2 z-30 text-md font-nunito text-white `}
                  onClick={() => toggleSelections(item.type)}
                  key={index}
                >
                  {item.type}
                </div>
              );
            })}
            <div
              className={`absolute h-8  bg-dark-violet top-1 left-1 z-20 rounded-lg transition-all ease-out duration-100 ${
                isTrackActive ? "left-1 w-12" : ""
              } ${isArtistActive ? "left-14 w-[54px]" : ""} ${
                isGenreActive ? "left-28 w-[53px]" : ""
              } `}
            />
          </div>
          <button className=" w-12 text-sm font-medium text-white bg-sky-blue rounded-lg  border-sky-blue  hover:bg-blue-600 hover:border-blue-600">
            Go
          </button>
        </div>
        <div className="relative flex justify-center pb-16 w-full">
          <input
            value={search}
            className="p-2 w-full text-sm outline-none rounded-s-lg text-gray-900 bg-gray-50 rounded-e-lg  border-gray-300  focus:border-sky-blue"
            placeholder={`${isArtistActive ? "Search an Artist" : ""}${
              isTrackActive ? "Search a Track" : ""
            }${isGenreActive ? "Search a Genre" : ""}`}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          />
          <button className="absolute top-1.5 right-3  ">
            <FontAwesomeIcon icon={faX} onClick={() => setSearch("")} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
