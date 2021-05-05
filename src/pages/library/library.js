import { Link } from "react-router-dom";
import { VideoCardVertical } from "../../components/videoCard/videoCardVerical/videoCardVertical";
import { useData } from "../../context/data-context";

export function Library() {
  const { data, dispatch } = useData();

  const getFilteredDataByCategory = (selectedCategory) =>
    data.videoList.filter((item) =>
      item.category.find((item) => item.id === selectedCategory)
    );

  const filteredDataByCategory = getFilteredDataByCategory(
    data.selectedCategory
  );

  return (
    <>
      <div>
        {data.categories.map((item) => (
          <Link to={`/library/${item.id}`} key={item.id}>
            <button
              className={
                item.id === data.selectedCategory
                  ? "btn btn-outlined active"
                  : "btn btn-outlined"
              }
              onClick={() =>
                dispatch({ type: "FILTER_DATA_BY_CATEGORY", payload: item })
              }
              key={item.id}
            >
              {item.name}
            </button>
          </Link>
        ))}
      </div>

      <div className="video-card-grid">
        {filteredDataByCategory.map((item) => (
          <VideoCardVertical video={item} key={item.url}/>
        ))}
      </div>
    </>
  );
}
