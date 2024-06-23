
import './Navbar.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import upload from '../../assets/upload.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/user_profile.jpg';
import { Link } from 'react-router-dom';




function Navbar({setsidebar})  {
  return(
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className="menu" onClick={()=>setsidebar(prev=>prev===false?true:false)}src={menu} alt="menu"></img>
         <Link to='/'> <img className="logo" src={logo} alt="Clonetube"/></Link>
    </div>
    <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
            <input className="search" type="text" placeholder='Search here'/>
            <img src={search} alt="searchbar" />
        </div>
    </div>
    <div className='nav-right flex-div'>
       
        <img src={upload} alt="uploadhere" />
        <img src={more} alt="more" />
        <img src={notification} alt="notification" />
        <img  className="profile" src={profile} alt="profile" />
    </div>
    </nav>
  )
}

export default Navbar;