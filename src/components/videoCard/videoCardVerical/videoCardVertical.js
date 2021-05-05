import { Link } from "react-router-dom";
import { useData } from "../../../context/data-context";

export const VideoCardVertical = ({ video }) => {
  const { dispatch } = useData();
  return (
    <div className="card-vertical card-avatar box-shadow-hover">
      <div className="card-header">
        <img src={`http://i3.ytimg.com/vi/${video.url}/hqdefault.jpg`} alt="" />
        <span
          className="card-icon-watch"
          onClick={() =>
            dispatch({
              type: video.inWatchLater
                ? "REMOVE_FROM_WATCH_LATER"
                : "ADD_TO_WATCH_LATER",
              payload: video.url
            })
          }
        >
          <i className="nav-icon icon-watch fas fa-clock"></i>
        </span>
        <span className="card-badge-bottom">{video.duration}</span>
      </div>
      <Link to={`/watch/${video.url}`} key={video.url}>
        <div className="card-description">
          <div className="card-description-avatar">
            <img
              className="avatar"
              src={`https://yt3.ggpht.com/ytc/${video.channel.thumbnail}`}
              alt=""
            />
          </div>
          <div className="card-text">
            <strong className="text-title">{video.title}</strong>
            <small className="text-gray">{video.channel.name}</small>
            <small className="text-gray">{video.publishDate}</small>
          </div>
        </div>
      </Link>
    </div>
  );
}
