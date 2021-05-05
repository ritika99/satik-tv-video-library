export const LastWatched = ({ video }) => {
  const calculateLastWatched = (watchedOn) => {
    const currentDate = new Date();
    const differenceInDays = Math.round(
      (currentDate.getTime() - watchedOn.getTime()) / (1000 * 3600 * 24)
    );
    return differenceInDays < 1
      ? "Today"
      : String(differenceInDays).concat("days ago");
  };

  console.log(video);
  return (
    <span className="card-text-date">
      {video.lastWatched ? calculateLastWatched(video.lastWatched) : null}
    </span>
  );
};
