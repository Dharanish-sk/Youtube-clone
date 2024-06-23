import './PlayVideo.css'
// import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import value_converter from '../../data'
 
{/* <iframe width="809" height="455" src="https://www.youtube.com/embed/d9OiK17viRg" title="Escape from High Safety Jail | Sardar | Exclusive Clip | Karthi | Rashi Khanna | P.S. Mithran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
import moment from 'moment';
import { useParams } from 'react-router-dom'


const PlayVideo = () => {
  const API_KEY =  import.meta.env.VITE_API_KEY;
  const {videoId} = useParams();
 const[apiData,setApiData]=useState(null);
 const[channelData,setChannelData]=useState(null);
 const [commentData,setCommentData] = useState([]);
 const fetchVideoData = async () => {
  try {
    const VideoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`;
    
    const response = await fetch(VideoDetail_url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch video data');
    }
    
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      setApiData(data.items[0]);
    } else {
      throw new Error('No data found for the specified video ID');
    }
    
    console.log(response.status, response.statusText, await response.text());
  } catch (error) {
    console.error('Error fetching video data:', error);
    // Handle the error, e.g., display a message to the user
  }
};
const fetchChannelData = async () => {
  if (!apiData) return;

  try {
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    const response = await fetch(channelDataUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch channel data');
    }

    const data = await response.json();
    if (data.items && data.items.length > 0) {
      setChannelData(data.items[0]);
    } else {
      throw new Error('No data found for the specified channel ID');
    }
  } catch (error) {
    console.error('Error fetching channel data:', error);
  }
  const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2CReplies&moderationStatus=published&order=time&textFormat=html&videoId=${videoId}&key=${API_KEY} `
await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
};

useEffect(() => {
  fetchVideoData();
}, [videoId]);

useEffect(() => {
  if (apiData) {
    fetchChannelData();
  }
}, [apiData]);

  return (
    <div className='play'>
        {/* <video src={video1}controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <h3>{apiData? apiData.snippet.title:"Title Here"}</h3>
          <div className='play-info'>
             
            <p>{apiData?value_converter(apiData.statistics.viewCount):"17k"} &bull;{ moment(apiData?apiData.snippet.publishedAt:"5 days").fromNow()}</p>
            <div>
                <span> <img src={like} alt="like" />{apiData?value_converter(apiData.statistics.likeCount):"like"}</span>
                <span> <img src={dislike} alt="dislike" /></span>
                 <span> <img src={share} alt="share" />Share</span>
                <span> <img src={save} alt="save" />Save</span>
             

            </div>
          </div>
      <hr/>
      <div className='publisher'>
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div> <p>{apiData?apiData.snippet.channelTitle:"Channel Name"}</p>
        <span>{channelData?value_converter(channelData.statistics.subscriberCount):"65k"} Subscribers</span>
          </div> 
          <button>Subscribe</button>
          </div>
          <div className="vid-dis">
            <p>{apiData?apiData.snippet.description.slice(0,250):"Discription here"}</p>
            <hr/>
          
            <h3>{apiData?value_converter(apiData.statistics.commentCount) :"655"} Comments</h3>
           {commentData.map((item,index)=>{
            return(
              <div key={index} className="comment">
          
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=''/>
              <div>
                <h3> {item?item.snippet.topLevelComment.snippet.authorDisplayName:"Name"}<span>3days ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
           <div className="comment-action">
            <img src={like} alt="" />
           <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
           <img src={dislike} alt="" />
           {/* <span>15</span> */}
               </div>
            </div>
           
           
           </div>

            )
           })}
           
     </div>
       
          

    </div>
  )
}

export default PlayVideo;
