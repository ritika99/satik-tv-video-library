import { v4 as uuid } from "uuid";

export function reducer(state, action) {
  switch (action.type) {
    case "SELECT_VIDEO_TO_WATCH":
      return {
        ...state,
        selectedVideo: action.payload
      };

    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedList: [
          ...state.likedList,
          ...state.videoList
            .filter((item) => item.url === action.payload)
            .map((item) => ({ ...item, isLiked: true }))
        ],
        videoList: state.videoList.map((item) =>
          item.url === action.payload ? { ...item, isLiked: true } : item
        )
      };

    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedList: state.likedList.filter(
          (item) => item.url !== action.payload
        ),
        videoList: state.videoList.map((item) =>
          item.url === action.payload ? { ...item, isLiked: false } : item
        )
      };

    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterList: [
          ...state.watchLaterList,
          ...state.videoList
            .filter((item) => item.url === action.payload)
            .map((item) => ({ ...item, inWatchLater: true }))
        ],
        videoList: state.videoList.map((item) =>
          item.url === action.payload ? { ...item, inWatchLater: true } : item
        )
      };

    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLaterList: state.watchLaterList.filter(
          (item) => item.url !== action.payload
        ),
        videoList: state.videoList.map((item) =>
          item.url === action.payload ? { ...item, inWatchLater: false } : item
        )
      };

    case "ADD_TO_HISTORY":
      return {
        ...state,
        historyList:
          state.historyList[0]?.url !== action.payload && !state.pauseHistory
            ? [
                ...state.videoList
                  .filter((item) => item.url === action.payload)
                  .map((item) => ({
                    ...item,
                    inHistory: true,
                    lastWatched: new Date()
                  })),
                ...state.historyList
              ]
            : state.historyList,
        videoList: state.videoList.map((item) =>
          item.url === action.payload ? { ...item, inHistory: true } : item
        )
      };

    case "DELETE_HISTORY":
      return {
        ...state,
        historyList: []
      };

    case "TOGGLE_PAUSE_HISTORY":
      return {
        ...state,
        pauseHistory: !state.pauseHistory
      };

    case "FILTER_DATA_BY_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload.id
      };

    case "GET_DATA_FROM_LOCAL_STORAGE":
      return {
        ...action.payload
      };

    case "TOGGLE_SAVE_TO":
      return {
        ...state,
        displaySaveTo: !state.displaySaveTo
      };

    case "TOGGLE_EDIT_PLAYLIST":
      return {
        ...state,
        editPlaylist: !state.editPlaylist
      };

    case "TOGGLE_DELETE_PLAYLIST":
      return {
        ...state,
        deletePlaylist: !state.deletePlaylist
      };

    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.concat({
          id: uuid(),
          title: action.payload,
          list: []
        })
      };

    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(
          (item) => item.id === action.payload.id
        )
      };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((item) =>
          item.id === action.payload.playlist.id
            ? {
                ...item,
                list: item.list.concat(
                  ...state.videoList.filter(
                    (item) =>
                      item.url ===
                      action.payload.selectedVideo.selectedVideo.url
                  )
                )
              }
            : item
        )
      };

    //Getting removed after another render
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((item) =>
          item.id === action.payload.playlistId
            ? {
                ...item,
                list: item.list.filter(
                  (item) => item.url !== action.payload.videoUrl
                )
              }
            : item
        )
      };

    case "SET_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.payload
      };

    default:
      return state;
  }
}
