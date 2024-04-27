function SearchBar() {
  return (
    <div className=" bg-dark-violet flex justify-center pb-16">
      <form className="w-1/2">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm outline-none rounded-s-lg text-gray-900 bg-gray-50 rounded-e-lg  border-gray-300  focus:border-sky-blue"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute top-0 -end-0.5 p-2.5 h-full text-sm font-medium text-white bg-sky-blue rounded-e-lg  border-sky-blue  hover:bg-blue-600 hover:border-blue-600"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
