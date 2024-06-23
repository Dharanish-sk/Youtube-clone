import PlayVideo from '../../Components/PlayVideo/PlayVideo.jsx';
import Recommended from '../../Components/Recommended/Recommended';
import './Video.css'
import { useParams } from 'react-router-dom';

const Video = () => {
  const {videoId,categoryId } =  useParams();

  return (
    <div className="play-v">
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
      
    </div>
  )
}

export default Video;
