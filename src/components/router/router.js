import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home/home";
import { Liked } from "../../pages/liked/liked";
import { Watch } from "../../pages/watch/watch";
import { History } from "../../pages/history/history";
import { Library } from "../../pages/library/library";
import { WatchLater } from "../../pages/watchLater/watchLater";
import { Playlist } from "../../pages/playlist/playlist";
import { PrivateRouter } from "./privateRouter";
import { Login } from "../../pages/authentication/login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:videoUrl" element={<Watch />} />
      <Route path="/library/:categoryId" element={<Library />} />
      <Route path="/login" element={<Login />} />
      <PrivateRouter path="/history" element={<History />} />
      <PrivateRouter path="/watch_later" element={<WatchLater />} />
      <PrivateRouter path="/liked" element={<Liked />} />
      <PrivateRouter path="/playlist/:playlistId" element={<Playlist />} />
    </Routes>
  );
}
