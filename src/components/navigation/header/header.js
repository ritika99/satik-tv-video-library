import { Searchbar } from "../../searchbar/searchbar";
import "./header.css";
import {HeaderMenu} from "./headerMenu";

export function Header({headerToggle, setHeaderToggle}) {
  return (
      <header className="header">
        <div className="header-container">
          <a href="/" className="header-logo">
            SatikTV
          </a>
          <Searchbar />
          <HeaderMenu headerToggle={headerToggle} setHeaderToggle={setHeaderToggle}/>
        </div>
      </header>
  )
}