import './Sidebar.css';
import home from '../../assets/home.png';
import game from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
 import jack from '../../assets/jack.png';
 import simon from '../../assets/simon.png';
 import tom from '../../assets/tom.png';
import cameron from '../../assets/cameron.png';
import megan from '../../assets/megan.png';
const Sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small"}`}>
        <div className='shortcut-link'>
        <div className={`side-link ${category===0?"active":""}`}onClick={()=>setcategory(0)}>
            <img src={home} alt="" />
            <p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`}onClick={()=>setcategory(20)}>
            <img src={game} alt="" />
            <p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`}onClick={()=>setcategory(2)}>
            <img src={automobiles} alt="" />
            <p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`}onClick={()=>setcategory(17)}>
            <img src={sports} alt="" />
            <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`}onClick={()=>setcategory(24)}>
            <img src={entertainment} alt="" />
            <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`}onClick={()=>setcategory(28)}>
            <img src={tech} alt="" />
            <p>Technology</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`}onClick={()=>setcategory(10)}>
            <img src={music} alt="" />
            <p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`}onClick={()=>setcategory(22)}>
            <img src={blogs} alt="" />
            <p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`}onClick={()=>setcategory(25)}>
            <img src={news} alt="" />
            <p>News</p>
        </div>
        <div className='subs-list'>
        <hr/>
        <h3>Subscribed</h3>
        <div className='side-link'>
        <img src={jack}alt="" /><p>pewpewdie</p>
        </div>
        <div className='side-link'>
        <img src={simon}alt="" /><p>MRbeast</p>
        </div>
        <div className='side-link'>
        <img src={tom} alt="" /><p>justin</p>
        </div>
        <div className='side-link'>
        <img src={megan} alt="" /><p>5 min craft</p>
        </div>
        <div className='side-link'>
        <img src={cameron} alt="" /><p>nas daily</p>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Sidebar;
