import { useState } from "react";
import { useData } from "../../context/data-context";
import "./saveTo.css";

export const SaveTo = (selectedVideo) => {
  const { data, dispatch } = useData();
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  return (
    <div className="container-modal grid-column-1">
      <div className="flex-space">
        <span className="para-text-rg">Save to...</span>
        <span onClick={() => dispatch({ type: "TOGGLE_SAVE_TO" })}>
          <i className="icon-cross fas fa-times"></i>
        </span>
      </div>
      <ul className="list">
        {data.playlists.map((item) => (
          <li key={item.id}>
            <label className="para-text">
              <input
                type="checkbox"
                className="input-checkbox"
                checked={item.list.some(({url}) => url === selectedVideo.selectedVideo.url)}
                onChange={() => {item.list.some(({url}) => url === selectedVideo.selectedVideo.url) ?
                dispatch({
                  type: "REMOVE_VIDEO_FROM_PLAYLIST",
                  payload: { selectedVideo, playlist: item }
                })
                   : dispatch({
                    type: "ADD_VIDEO_TO_PLAYLIST",
                    payload: { selectedVideo, playlist: item }
                  })
                }}
              />
              {item.title}
            </label>
          </li>
        ))}
      </ul>

      <button
        className={
          createPlaylist ? "btn btn-outlined" : "btn btn-outlined display"
        }
        onClick={() => setCreatePlaylist((state) => !state)}
      >
        <i className="icon-plus fas fa-plus nav-icon"></i>
        Create new playlist
      </button>

      <div
        className={
          createPlaylist
            ? "container-create-playlist open"
            : "container-create-playlist "
        }
      >
        <div className="input-field">
          <input
            type="text"
            className="input-text"
            value={playlistName}
            id="name"
            required
            onChange={(event) => setPlaylistName(event.target.value)}
          />
          <label className="label-input-text" htmlFor="name">
            Name
          </label>
        </div>
        <button
          className={
            playlistName.length < 3
              ? "btn btn-primary card-inactive"
              : "btn btn-primary"
          }
          onClick={() => {
            dispatch({ type: "ADD_NEW_PLAYLIST", payload: playlistName });
            setCreatePlaylist((state) => !state);
            setPlaylistName("");
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};
