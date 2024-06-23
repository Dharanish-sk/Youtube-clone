import'./Feed.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  value_converter from '../../data.js';
import moment from 'moment';

const Feed = ({category}) => {
   
  
const API_KEY =  import.meta.env.VITE_API_KEY;
 
  const[Data,setData]=useState([]);
  const fetchData = async()=>{
    const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=60&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `;
     await fetch( videoList_url).then(response=>response.json()).then(Data=>setData(Data.items))
  }
  useEffect(()=>{
    fetchData();

  },[category])
  return (
    <div className='feed'>
      
      {Data.map((item,index)=>{
        return(
          
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title} </h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p> { value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
          </Link>
        
        )
      })}
         
      
    </div>

   
  )
}

export default Feed;
