import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed.jsx';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Home = ({sidebar}) => {

const[category,setcategory] = useState(0);

  return (
    <div>
        <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
        <div className= {`container ${sidebar?"":'large'}`}>
          <Feed category={category}/>
        </div>
      
    </div>
  )
}

export default Home;
