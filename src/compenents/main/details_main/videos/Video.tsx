import { Video } from "../../../../entities/FetchRes";
import "./video.css";
interface Props {
  video: Video;
}
const Video_ = ({ video }: Props) => {
  return (
    <div className="video">
      <div className="videoTitle">
        <h2>{video.name}</h2>
      </div>
      <iframe
        src={"https://www.youtube.com/embed/" + video.key}
        title={video.name}
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default Video_;
