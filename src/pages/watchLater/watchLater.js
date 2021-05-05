import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { VideoCardVertical } from "../../components/videoCard/videoCardVerical/videoCardVertical";

export function WatchLater() {
  const { data } = useData();

  return (
    <div>
      {data.watchLaterList.length > 0 ? (
        <div className="video-card-grid">
          {data.watchLaterList.map((item) => (
            <VideoCardVertical video={item} key={item.url}/>
          ))}
        </div>
      ) : (
        <>
          <h1>Kaal Kare So Aaj Kar, Aaj Kare So Ub..</h1>
          <h4>~Kabir</h4>
          <Link to="/">
            <button className="btn btn-primary btn-lg">BINGE WATCH HERE</button>
          </Link>
        </>
      )}
    </div>
  );
}
