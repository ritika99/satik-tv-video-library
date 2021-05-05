import "./sidebar.css";
import { Link } from "react-router-dom";
import { useData } from "../../../context/data-context";

export function Sidebar({ headerToggle }) {
  const { data } = useData();
  const { selectedCategory } = data;

  return (
    <nav className={headerToggle ? "nav show-nav" : "nav"}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" className="nav-logo nav-link">
            <i className="nav-icon icon-disk fas fa-compact-disc"></i>
            <span className="nav-name">SatikTV</span>
          </a>
        </div>
        <div>
          <ul className="list nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="nav-icon icon-home fas fa-home"></i>
                <span className="nav-name">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/library/${selectedCategory}`} className="nav-link ">
                <i className="nav-icon icon-library fas fa-video"></i>
                <span className="nav-name">Library</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="history" className="nav-link ">
                <i className="nav-icon icon-history fas fa-history"></i>
                <span className="nav-name">History</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="watch_later" className="nav-link ">
                <i className="nav-icon icon-watch fas fa-clock"></i>
                <span className="nav-name">Watch later</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="liked" className="nav-link ">
                <i className="nav-icon icon-liked fas fa-thumbs-up"></i>
                <span className="nav-name">Liked videos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/playlist/${data.playlists[0].id}`} className="nav-link ">
                <i className="nav-icon icon-liked fas fa-list"></i>
                <span className="nav-name">Playlists</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
