import { useParams } from "react-router-dom";
import { useData } from "../../context/data-context";
import { SaveTo } from "../../components/save/saveTo";
import { VideoCardHorizontal } from "../../components/videoCard/videoCardHorizontal/videoCardHorizontal";
import { ReactVideoPlayer } from "../../components/reactVideoPlayer/reactVideoPlayer";
import "./watch.css";

export function Watch() {
  const { videoUrl } = useParams();
  const { data, dispatch } = useData();

  return (
    <div className="grid-column-2">
      {data.videoList
        .filter((item) => item.url === videoUrl)
        .map((item) => (
          <div className="card-vertical-lg" key={item.url}>
            <div className="flex-centre">
            <ReactVideoPlayer videoUrl={item.url} />
            {data.displaySaveTo && <SaveTo selectedVideo={item} />}
            </div>
            <div className="card-text">
              <strong>{item.title}</strong>
              <small className="text-gray">52M views | 1 year ago</small>
              <div className="card-text-flex">
                <div className="card-text-flex">
                  <img
                    className="avatar"
                    src={`https://yt3.ggpht.com/ytc/${item.channel.thumbnail}`}
                    alt=""
                  />
                  <strong className="text-name">{item.channel.name}</strong>
                </div>
              </div>
              <div className="card-btn">
                <i
                  className={
                    item.isLiked
                      ? "nav-icon icon-liked fas fa-thumbs-up active"
                      : "nav-icon icon-liked fas fa-thumbs-up"
                  }
                  onClick={
                    () => 
                    // setLike(videoUrl, item)
                    dispatch({
                      type: item.isLiked
                        ? "REMOVE_FROM_LIKED_VIDEOS"
                        : "ADD_TO_LIKED_VIDEOS",
                      payload: videoUrl
                    })
                  }
                ></i>
                <span onClick={() => dispatch({ type: "TOGGLE_SAVE_TO" })}>
                  <i className="icon-saved fas fa-bookmark"></i>
                  <span> SAVE</span>
                </span>
              </div>
            </div>
          </div>
        ))}

      <div className="grid-column-1">
        {data.videoList
          .filter((item) => item.url !== videoUrl)
          .map((item) => (
            <VideoCardHorizontal video={item} key={item.url} />
          ))}
      </div>
    </div>
  );
}
