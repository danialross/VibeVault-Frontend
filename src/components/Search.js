import { useState } from "react";
import axios from "axios";

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
      <div className="w-full flex flex-col justify-center items-center bg-gray-200 p-4 h-full rounded-2xl">
        <div className="flex justify-center w-full h-4/5 bg-white rounded-xl p-2 mb-4 ">
          <div className="w-24 h-6 bg-dark-violet rounded-md text-white font-nunito text-center mb-4 ">
            Selections
          </div>
        </div>
        <div className="flex justify-center w-full pb-4">
          <div className="mr-4 ">
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option selected>Recommendations</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="bg-gray-400 p-1 rounded-2xl mr-4">
            <ul className="w-full font-medium text-center">
              <li className="w-full focus-within:z-10 rounded-xl">
                {options.map((item, index) => {
                  let rounded = "";
                  if (index === 0) {
                    rounded = "rounded-s-xl border-none";
                  }
                  if (index === options.length - 1) {
                    rounded = "rounded-e-xl border-none";
                  }
                  return (
                    <button
                      className={`inline-block  py-1 px-2  text-md ${rounded} ${
                        item.state ? "text-sky-blue" : "text-dark-violet"
                      } bg-gray-100 font-nunito border-x border-gray-300 focus:outline-none hover:bg-gray-300`}
                      onClick={() => toggleSelections(item.type)}
                      key={index}
                    >
                      {item.type}
                    </button>
                  );
                })}
              </li>
            </ul>
          </div>
          <button className=" w-12 text-sm font-medium text-white bg-sky-blue rounded-2xl  border-sky-blue  hover:bg-blue-600 hover:border-blue-600">
            Go
          </button>
        </div>
        <div className="flex justify-center pb-16 w-full">
          <div className="flex w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm outline-none rounded-s-lg text-gray-900 bg-gray-50 rounded-e-lg  border-gray-300  focus:border-sky-blue"
              placeholder={`${isArtistActive ? "Search an Artist" : ""}${
                isTrackActive ? "Search a Track" : ""
              }${isGenreActive ? "Search a Genre" : ""}`}
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
