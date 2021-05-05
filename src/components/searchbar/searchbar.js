import { useData } from "../../context/data-context";

export function Searchbar() {
  const { data, dispatch } = useData();
  return (
    <div className="header-search">
      <input
        value={data.searchInput}
        type="search"
        placeholder="Search"
        className="header-input"
        onChange={(event) =>
          dispatch({ type: "SET_SEARCH_INPUT", payload: event.target.value })
        }
      />
      <i className="icon-search fas fa-search"></i>
    </div>
  );
}
