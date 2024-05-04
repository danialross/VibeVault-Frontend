import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Selection from "./Selection";

function Search() {
  const [isTrackActive, setIsTrackActive] = useState(true);
  const [isArtistActive, setIsArtistActive] = useState(false);
  const [isGenreActive, setIsGenreActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selections, setSelection] = useState([
    {
      name: "Delilah (pull me out of this)",
      id: "0Ftrkz2waaHcjKb4qYvLmz",
      artist: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4oLeXFyACqeem2VImYeBFe",
          },
          href: "https://api.spotify.com/v1/artists/4oLeXFyACqeem2VImYeBFe",
          id: "4oLeXFyACqeem2VImYeBFe",
          name: "Fred again..",
          type: "artist",
          uri: "spotify:artist:4oLeXFyACqeem2VImYeBFe",
        },
      ],
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2739c856c6f2c6161af49446bf8",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e029c856c6f2c6161af49446bf8",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048519c856c6f2c6161af49446bf8",
          width: 64,
        },
      ],
    },
    {
      name: "Delilah (pull me out of this) outotutouo utout ouotutoiouioioi oioioioioioioioioioioioioioioioioioioioio",
      id: "5w9upngVRHNjdZcRC7Xxr2",
      artist: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4oLeXFyACqeem2VImYeBFe",
          },
          href: "https://api.spotify.com/v1/artists/4oLeXFyACqeem2VImYeBFe",
          id: "4oLeXFyACqeem2VImYeBFe",
          name: "Fred again..",
          type: "artist",
          uri: "spotify:artist:4oLeXFyACqeem2VImYeBFe",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3WtrH1zNpzoPSz6XpwCh6y",
          },
          href: "https://api.spotify.com/v1/artists/3WtrH1zNpzoPSz6XpwCh6y",
          id: "3WtrH1zNpzoPSz6XpwCh6y",
          name: "Delilah Montagu",
          type: "artist",
          uri: "spotify:artist:3WtrH1zNpzoPSz6XpwCh6y",
        },
      ],
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b2737622b889949b07f15c6b57e2",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e027622b889949b07f15c6b57e2",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d000048517622b889949b07f15c6b57e2",
          width: 64,
        },
      ],
    },
    {
      name: "DELILAH - SUMMER VERSION",
      id: "1vMUIdnSrLmdUbBWewg8Tr",
      artist: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6Kz7MXIUFMtp5Ts91lagtR",
          },
          href: "https://api.spotify.com/v1/artists/6Kz7MXIUFMtp5Ts91lagtR",
          id: "6Kz7MXIUFMtp5Ts91lagtR",
          name: "MIKOLAS",
          type: "artist",
          uri: "spotify:artist:6Kz7MXIUFMtp5Ts91lagtR",
        },
      ],
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27340727a5713448b5d0ad22f0a",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0240727a5713448b5d0ad22f0a",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485140727a5713448b5d0ad22f0a",
          width: 64,
        },
      ],
    },
    {
      name: "DELILAH - SUMMER VERSION",
      id: "1vMUIdnSrLmdUbBWewg8Tr",
      artist: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6Kz7MXIUFMtp5Ts91lagtR",
          },
          href: "https://api.spotify.com/v1/artists/6Kz7MXIUFMtp5Ts91lagtR",
          id: "6Kz7MXIUFMtp5Ts91lagtR",
          name: "MIKOLAS",
          type: "artist",
          uri: "spotify:artist:6Kz7MXIUFMtp5Ts91lagtR",
        },
      ],
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27340727a5713448b5d0ad22f0a",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0240727a5713448b5d0ad22f0a",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485140727a5713448b5d0ad22f0a",
          width: 64,
        },
      ],
    },
    {
      name: "Hey There Delilah",
      id: "4RCWB3V8V0dignt99LZ8vH",
      artist: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1g1yxsNVPhMUl9GrMjEb2o",
          },
          href: "https://api.spotify.com/v1/artists/1g1yxsNVPhMUl9GrMjEb2o",
          id: "1g1yxsNVPhMUl9GrMjEb2o",
          name: "Plain White T's",
          type: "artist",
          uri: "spotify:artist:1g1yxsNVPhMUl9GrMjEb2o",
        },
      ],
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273beae6e69d6505fd379ef3081",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e02beae6e69d6505fd379ef3081",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d00004851beae6e69d6505fd379ef3081",
          width: 64,
        },
      ],
    },
  ]);
  const [suggestions, setSuggestions] = useState([]);
  const [debounceInput, setDebounceInput] = useState("");

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

  const addToSelection = (selection) => {
    setSelection([...selections, selection]);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceInput(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const handleRemoveSelection = (index) => {
    const modifiedSelection = [...selections];
    modifiedSelection.splice(index, 1);
    setSelection(modifiedSelection);
  };

  useEffect(() => {
    if (debounceInput) {
      const fetchSuggestions = async () => {
        let url = `${process.env.REACT_APP_API_URL}/`;
        let params = {};
        if (isGenreActive) {
          url += "get-genres";
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
          if (isGenreActive) {
            setSuggestions(
              response.data.result.filter((item) => item.includes(search))
            );
          } else {
            setSuggestions(response.data.result);
            setIsLoading(false);
          }
        } catch (e) {
          console.error({ error: e });
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [debounceInput]);

  return (
    <div className="bg-dark-violet w-[800px]">
      <div className="w-full flex flex-col justify-start items-center bg-gray-200 p-4 h-full rounded-2xl">
        <div className="flex flex-col justify-start items-center w-full h-[320px] bg-white rounded-xl p-2 mb-4 ">
          <div className="text-dark-violet rounded-md text-lg font-nunito text-center mt-1">
            Selections
          </div>
          <div className="flex justify-center w-full h-full">
            {selections.length !== 0 &&
              selections.map((item, index) => (
                <div
                  className="flex flex-col justify-start items-center w-full h-full rounded-lg p-3 gap-4 "
                  key={index}
                >
                  <Selection
                    index={index}
                    title={item.name}
                    artist={item.artist[0].name}
                    image={item.images[1].url}
                    handleRemove={handleRemoveSelection}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className=" flex justify-center w-full pb-4">
          <div className="mr-4 ">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-nunito"
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
                  className={`p-2 z-30 text-md font-nunito text-white `}
                  onClick={() => toggleSelections(item.type)}
                  key={index}
                >
                  {item.type}
                </div>
              );
            })}
            <div
              className={`absolute h-8 bg-dark-violet top-1 z-20 rounded-lg transition-all ease-out duration-100 ${
                isTrackActive ? "left-1 w-[46px]" : ""
              } ${isArtistActive ? "left-14 w-[52px]" : ""} ${
                isGenreActive ? "left-28 w-[54px]" : ""
              } `}
            />
          </div>
          <button className="w-12 text-sm font-medium text-white bg-sky-blue rounded-lg border-sky-blue hover:bg-blue-600 hover:border-blue-600">
            Go
          </button>
        </div>
        <div className="relative flex justify-center pb-4 w-[410px]">
          <input
            value={search}
            className="p-2 w-full text-sm outline-none rounded-s-lg text-gray-900 bg-gray-50 rounded-e-lg border-gray-300 focus:border-sky-blue"
            placeholder={`${isArtistActive ? "Search an Artist" : ""}${
              isTrackActive ? "Search a Track" : ""
            }${isGenreActive ? "Search a Genre" : ""}
            `}
            onChange={handleInput}
          />
          <button className="absolute top-1.5 right-3">
            <FontAwesomeIcon icon={faX} onClick={handleClearInput} />
          </button>
        </div>
        {
          <div className=" bg-white w-full rounded-xl font-nunito">
            {isLoading ? (
              <div role="status" className=" flex justify-center p-4">
                <svg
                  aria-hidden="true"
                  className="inline h-32 w-32 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
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
              <ul className="">
                {suggestions.map((item, index) => (
                  <li
                    className="hover:bg-gray-300 rounded-md px-4 py-2"
                    key={index}
                  >
                    <button
                      className="w-full text-start"
                      onClick={() => addToSelection(item)}
                    >
                      {isTrackActive
                        ? `${item.name} - ${item.artist[0].name}`
                        : `${item}`}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        }
      </div>
    </div>
  );
}

export default Search;
