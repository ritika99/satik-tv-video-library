import { Link } from "react-router-dom";
import { LastWatched } from "../../../pages/history/lastWatched";
import { RemoveVideo } from "../../../pages/playlist/removeVideo";

export const VideoCardHorizontal = ({ video, selectedPlaylist, component }) => {

  return (
    <div className="flex-space box-shadow-hover" key={video.url}>
      <Link to={`/watch/${video.url}`}>
        <div className="card-horizontal row">
          <img
            className="card-horizontal-img"
            src={`http://i3.ytimg.com/vi/${video.url}/hqdefault.jpg`}
            alt=""
          />
          <div className="card-text">
            <small className="text-title">{video.title}</small>
            <small className="text-gray">{video.channel.name}</small>
            <small className="text-gray">{video.publishDate}</small>
          </div>
          {component === "history" ? <LastWatched video={video} /> : null}
        </div>
      </Link>
      {component === "playlist" ? <RemoveVideo video={video} selectedPlaylist={selectedPlaylist} /> : null}
    </div>
  );
};
