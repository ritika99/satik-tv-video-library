import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./data-reducer";
import { videoList, categories, playlists } from "../api/initialData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, {
    videoList: videoList,
    categories: categories,
    playlists: playlists,
    historyList: [],
    watchLaterList: [],
    likedList: [],
    pauseHistory: false,
    selectedCategory: 1,
    displaySaveTo: false,
    editPlaylist: false,
    deletePlaylist: false,
    searchInput: ""
  });

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   dispatch({ type: "GET_DATA_FROM_LOCAL_STORAGE", payload: data });
  //   console.log(data);
  // }, []);

  // const setLike = (video, item) => {
  //   dispatch({
  //     type: item.isLiked ? "REMOVE_FROM_LIKED_VIDEOS" : "ADD_TO_LIKED_VIDEOS",
  //     payload: video
  //   });
  //   localStorage.setItem("data", JSON.stringify(data));
  // };

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
