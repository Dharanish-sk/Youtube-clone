import './Recommended.css';
import { useEffect, useState } from 'react';
import value_converter  from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    const API_KEY =  import.meta.env.VITE_API_KEY;


    const fetchData = async () => {
        const relative_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&chart=mostPopular&maxResults=60&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `;
        await fetch(relative_url)
            .then(res => res.json())
            .then(data => setApiData(data.items));
    }

    useEffect(() => {
        fetchData();
    }, [categoryId]);
    console.log(apiData);

    return (
        <div className='rec'>
            {apiData.map((items, index) => {
                return (
                    <Link to={`/video/${items.snippet.categoryId}/${items.id}`} key={index} className="side-list">
                        <img src={items?items.snippet.thumbnails.default.url:""} alt="" />
                        <div className="vid-info">
                            <h4>{items.snippet.title}</h4>
                            {/* <p>{item.snippet.description}</p> */}
                            <p>{items?value_converter(items.statistics.viewCount):""} views</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Recommended;
