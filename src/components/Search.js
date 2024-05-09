import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faRedo } from "@fortawesome/free-solid-svg-icons";
import Selection from "./Selection";

function Search() {
  const [isTrackActive, setIsTrackActive] = useState(true);
  const [isArtistActive, setIsArtistActive] = useState(false);
  const [isGenreActive, setIsGenreActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selections, setSelection] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [debounceInput, setDebounceInput] = useState("");
  const [buttonisDisabled, setButtonIsDisabled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isSearchHidden, setIsSearchHidden] = useState(false);

  const options = [
    { type: "Track", state: isTrackActive },
    { type: "Artist", state: isArtistActive },
    { type: "Genre", state: isGenreActive },
  ];

  const toggleSelections = (selection) => {
    setSelection([]);
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
    handleClearInput();
  };

  const handleInput = (e) => {
    if (e.target.value === " ") {
      setSearch("");
      return;
    }

    if (e.target.value === "") {
      setIsLoading(false);
      setSearch("");
      return;
    }

    setIsLoading(true);
    setSearch(e.target.value);
  };

  const handleClearInput = () => {
    setSearch("");
    setDebounceInput("");
    setSuggestions([]);
  };

  const handleAddSelection = (selection) => {
    for (const item of selections) {
      if (selection.key === item.key) {
        return;
      }
    }

    setSelection([...selections, selection]);
  };

  const handleRemoveSelection = (key) => {
    const modifiedSelection = selections.filter((item) => item.key !== key);
    setSelection(modifiedSelection);
  };

  const getButtonText = (item) => {
    if (isTrackActive) {
      return `${item.name} - ${item.artist[0].name}`;
    } else if (isArtistActive) {
      return `${item.name}`;
    } else {
      return `${item.genre}`;
    }
  };

  const showRecommendations = () => {
    setIsSearchVisible(false);
  };

  const showSearch = () => {
    setIsSearchVisible(true);
    handleClearInput();
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceInput(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    if (debounceInput) {
      const fetchSuggestions = async () => {
        let url = `${process.env.REACT_APP_API_URL}/`;
        let params = {};
        if (isGenreActive) {
          url += "get-genres";
          params.genre = search;
        } else {
          url += "get-metadata";
          if (isTrackActive) {
            params.track = search;
          } else {
            params.artist = search;
          }
        }
        let response = null;

        try {
          response = await axios.get(url, { params: params });
          setSuggestions(response.data.result);
          setIsLoading(false);
        } catch (e) {
          console.error({ error: e });
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [debounceInput]);

  useEffect(() => {
    if (selections.length >= 5) {
      setButtonIsDisabled(true);
    } else {
      setButtonIsDisabled(false);
    }
  }, [selections]);

  return (
    <div className="w-[800px]">
      <div className="w-full flex flex-col justify-start items-center bg-gray-200 p-4 h-full rounded-2xl">
        <div
          className={`flex flex-col justify-start items-center w-full mb-4 ${
            isSearchVisible ? "h-[306px]" : "h-full"
          } bg-white rounded-xl p-2 transition-all duration-700 ease-out`}
        >
          <div className="text-dark-violet text-xl font-nunito text-center mt-4 transition-all duration-300 ease-out">
            {isSearchVisible ? "Selections" : "Recommendations"}
          </div>

          <div
            className={`flex items-start justify-evenly w-full py-6 transition-transform ${
              isSearchVisible ? "scale-100" : "scale-0"
            } duration-300 ease-out`}
          >
            {selections.length !== 0 &&
              selections.map((item) => (
                <Selection
                  key={item.key}
                  //if artist prop exist means the name is the track name
                  title={item.artist ? item.name : null}
                  //if artist prop dne means its the name is the artists name
                  artist={item.artist ? item.artist[0].name : item.name}
                  genre={item.genre}
                  image={item.images ? item.images[1]?.url : null}
                  handleRemove={() => handleRemoveSelection(item.key)}
                />
              ))}
          </div>
        </div>
        {isSearchVisible && (
          <>
            <div className={` flex justify-center items-center w-full pb-4`}>
              <div className="flex relative font-medium text-center mr-4 rounded-xl bg-white z-10">
                {options.map((item, index) => {
                  return (
                    <button
                      className={`p-4 z-30 text-md font-nunito ${
                        item.state ? "text-white" : "text-black"
                      }`}
                      onClick={() => toggleSelections(item.type)}
                      key={index}
                    >
                      {item.type}
                    </button>
                  );
                })}
                <div
                  className={`absolute h-[40px] bg-dark-violet top-2  z-20 rounded-lg transition-all ease-out duration-100 ${
                    isTrackActive ? "left-2 w-[56px]" : ""
                  } ${isArtistActive ? "left-[72px] w-[70px]" : ""} ${
                    isGenreActive ? "left-[152px] w-[58px]" : ""
                  } `}
                />
              </div>
              <button
                className="h-14 w-14 text-md font-medium text-white bg-dark-violet border-4 border-dark-violet rounded-xl hover:text-xl transition-all duration-250 linear"
                onClick={showRecommendations}
              >
                Go
              </button>
            </div>
            <div className="relative flex justify-center pb-4 w-[410px]">
              <input
                value={search}
                className="p-2.5 w-full font-nunito text-sm outline-none rounded-s-lg  bg-white rounded-e-lg pr-10"
                placeholder={`${isArtistActive ? "Search an Artist" : ""}${
                  isTrackActive ? "Search a Track" : ""
                }${isGenreActive ? "Search a Genre" : ""}
            `}
                onChange={handleInput}
              />
              <button className="absolute top-2 right-3">
                <FontAwesomeIcon icon={faX} onClick={handleClearInput} />
              </button>
            </div>
            {
              <div className="relative bg-white w-full rounded-xl font-nunito py-">
                {isLoading ? (
                  <div role="status" className=" flex justify-center p-4">
                    <svg
                      aria-hidden="true"
                      className="inline h-16 w-16 text-gray-600 animate-spin  fill-purple-600 m-8"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      scale={2}
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <ul>
                    {suggestions.map((item, index) => (
                      <li
                        className={` ${
                          buttonisDisabled ? "hover:none" : "hover:bg-gray-300"
                        } rounded-md px-4 py-1`}
                        key={index}
                      >
                        <button
                          className={`text-start disabled:opacity-20 transition-opacity duration-500 ease-out p-1`}
                          disabled={buttonisDisabled}
                          onClick={() => {
                            item.key = uuidv4();
                            handleAddSelection(item);
                          }}
                        >
                          <div className="flex justify-center items-center line-clamp-1">
                            {getButtonText(item)}
                          </div>
                        </button>
                      </li>
                    ))}
                    {search.length !== 0 && (
                      <div
                        className={`absolute text-white font-nunito top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-lg ${
                          buttonisDisabled
                            ? "opacity-100 duration-200"
                            : "opacity-0 duration-100"
                        } transition-all ease-out`}
                      >
                        Max Selections Reached
                      </div>
                    )}
                  </ul>
                )}
              </div>
            }
          </>
        )}

        {!isSearchVisible && (
          <div className="w-full flex justify-center">
            <button
              className={`h-10 w-20  text-md font-medium text-white bg-dark-violet border-4 border-dark-violet rounded-xl hover:text-xl transition-all duration-250 linear`}
              onClick={showSearch}
            >
              <FontAwesomeIcon icon={faRedo} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
