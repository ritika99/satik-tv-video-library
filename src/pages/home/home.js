import { VideoCardVertical } from "../../components/videoCard/videoCardVerical/videoCardVertical";
import { useData } from "../../context/data-context";
import "./home.css";

export function Home() {
  const { data } = useData();
  return (
    <div className="video-card-grid">
      {data.videoList
        .filter((item) =>
          data.searchInput !== undefined
            ? item.title.toLowerCase().includes(data.searchInput) ||
              item.channel.name.toLowerCase().includes(data.searchInput)
            : item
        )
        .map((item) => (
          <VideoCardVertical video={item} key={item.url} />
        ))}
    </div>
  );
}
