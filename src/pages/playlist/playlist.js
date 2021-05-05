import { useState } from "react";
import { Link } from "react-router-dom";
import { VideoCardHorizontal } from "../../components/videoCard/videoCardHorizontal/videoCardHorizontal";
import { useData } from "../../context/data-context";
import "./playlist.css";

export function Playlist() {
  const { data, dispatch } = useData();
  const [selectedPlaylist, setSelectedPlaylist] = useState(data.playlists[0]);
  const { editPlaylist, deletePlaylist } = data;

  return (
    <div className="grid-column-1">
      <div className="container-flex">
        {data.playlists.map((item) => (
          <Link to={`/playlist/${item.id}`} key={item.id}>
            <button
              className={
                item.id === selectedPlaylist.id
                  ? "btn btn-primary icon-badge-notification"
                  : "btn btn-outlined icon-badge-notification"
              }
              onClick={() => setSelectedPlaylist(item)}
            >
              {item.title}
              <i
                className={
                  deletePlaylist
                    ? "icon-cross fas fa-times badge-status notification"
                    : ""
                }
                onClick={() =>
                  dispatch({ type: "DELETE_PLAYLIST", payload: item })
                }
              ></i>
            </button>
          </Link>
        ))}
      </div>
      <div>
        <button
          className="btn btn-outlined"
          onClick={() => dispatch({ type: "TOGGLE_EDIT_PLAYLIST" })}
        >
          {editPlaylist ? "Save Changes" : "Edit Playlist"}
        </button>
        <button
          className="btn btn-outlined"
          onClick={() => dispatch({ type: "TOGGLE_DELETE_PLAYLIST" })}
        >
          {deletePlaylist ? "Save Changes" : "Delete Playlist"}
        </button>
      </div>
      {selectedPlaylist.list.map((item) => (
        <VideoCardHorizontal
          video={item}
          selectedPlaylist={selectedPlaylist}
          component={"playlist"}
          key={item.url}
        />
      ))}
    </div>
  );
}
