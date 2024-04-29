import Info from "./Info";
import Search from "./Search";
function Column() {
  return (
    <div className="flex bg-dark-violet justify-center pb-8">
      <Info />
      <Search />
    </div>
  );
}

export default Column;
