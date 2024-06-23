import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import { useState } from "react";

const App = () => {
  const [sidebar, setsidebar] = useState(true); // Corrected: Added the initial state value

  return (
    <Router>
      <div>
        <Navbar setsidebar={setsidebar}/>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>}/>
          <Route path='/Video/:categoryId/:videoId' element={<Video/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
