import { useData } from "../../context/data-context";

export const RemoveVideo = ({ video, selectedPlaylist }) => {
  const { data, dispatch } = useData();
  return (
    <span
      onClick={() =>
        dispatch({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: {
            playlistId: selectedPlaylist.id,
            videoUrl: video.url
          }
        })
      }
    >
      <i
        className={
          data.editPlaylist
            ? "icon-cross fas fa-times"
            : "icon-cross hide fas fa-times"
        }
      ></i>
    </span>
  );
};
