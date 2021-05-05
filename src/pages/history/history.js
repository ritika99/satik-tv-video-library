import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { VideoCardHorizontal } from "../../components/videoCard/videoCardHorizontal/videoCardHorizontal";

export function History() {
  const { data, dispatch } = useData();
  return (
    <div className="grid-column-1">
      <div>
        <button
          className="btn btn-outlined"
          onClick={() => dispatch({ type: "TOGGLE_PAUSE_HISTORY" })}
        >
          {data.pauseHistory ? (
            <span>
              <i className="far fa-play-circle"></i> Turn on watch history
            </span>
          ) : (
            <span>
              <i className="far fa-pause-circle"></i> Pause watch history
            </span>
          )}
        </button>
        {data.historyList.length > 0 ? (
          <button
            className="btn btn-outlined"
            onClick={() => dispatch({ type: "DELETE_HISTORY" })}
          >
            <i className="fa fa-trash"></i> Clear all watch history
          </button>
        ) : (
          <>
            <h4>No History!</h4>
            <Link to="/">
              <button className="btn btn-primary btn-lg">
                BINGE WATCH HERE
              </button>
            </Link>
          </>
        )}
      </div>
      {data.historyList.map((item) => (
        <VideoCardHorizontal video={item} component={"history"} key={item.url}/>
      ))}
    </div>
  );
}
