import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";
import { VideoCardVertical } from "../../components/videoCard/videoCardVerical/videoCardVertical";

export function Liked() {
  const { data } = useData();

  return (
    <div>
      {data.likedList.length > 0 ? (
        <div className="video-card-grid">
          {data.likedList.map((item) => (
            <VideoCardVertical video={item} key={item.url} />
          ))}
        </div>
      ) : (
        <>
          <h4>
            Hit the like <i className="icon-liked fas fa-thumbs-up"></i> button
          </h4>
          <Link to="/">
            <button className="btn btn-primary btn-lg">BINGE WATCH HERE</button>
          </Link>
        </>
      )}
    </div>
  );
}
