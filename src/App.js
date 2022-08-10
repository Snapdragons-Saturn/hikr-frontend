import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Region from './components/Region';
import Hikes from './components/Hikes'
import AddHike from './components/AddHike'
import EditHike from './components/EditHike'
import Login from './components/Login'
import SignUp from './components/Sign-Up';
import User from './components/User';


function App() {
  return (
    <div className="App">
    <nav className = "nav">
      <Link className="nav2" to="/">
        <h1 className="navStyle">Home</h1>
      </Link>
      <Link className="nav2" to="/about">
          <h1 className="navStyle">About</h1>
        </Link>
        <Link className="nav2" to="/login">
          <h1 className="navStyle">Log In</h1>
        </Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regions/:region" element={<Region />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/hike/:_id" element={<Hikes />} />
          <Route path="/addhike" element={<AddHike />} />
          <Route path='/edithike/:_id' element={<EditHike/>} />
          <Route path="/Sign-Up" element={<SignUp />} />
        </Routes>
      </main>
      <footer className="footer">
                <div className="addHikeLink">
                  <Link className="addHikeFooter"to="/addhike">Add a Hike</Link>
                    <p>
                        &copy; 2020 Thomas Hummel, Bella Maldonado, Gavin Southerland, <a href="mailto:Iyadabdulwahid23@gmail.com" class="footer__link">Iyad Abdulwahid</a>
                    </p>
                </div>
      </footer>
    </div>
  );
}

export default App;


