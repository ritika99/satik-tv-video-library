import ReactPlayer from "react-player";
import { useData } from "../../context/data-context";
import "./reactVideoPlayer.css";

export const ReactVideoPlayer = ({videoUrl}) => {
    const {dispatch} = useData();
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`https://www.youtube.com/embed/${videoUrl}`}
          width='100%'
          height='100%'
          controls={true}
          onPlay={() =>
            dispatch({
              type: "ADD_TO_HISTORY",
              payload: videoUrl
            })
          }
        />
      </div>
    )
}