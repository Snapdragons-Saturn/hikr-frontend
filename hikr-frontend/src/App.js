import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Region from './components/Region';
import Hikes from './components/Hikes'
import AddHike from './components/AddHike'
import EditHike from './components/EditHike'

function App() {
  return (
    <div className="App">
      <h1 className = "title">Hikr App! Where all your hiking dreams come true!</h1>
    <nav className = "nav">
      <Link className="nav2" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="nav2" to="/about">
          <h1>About</h1>
        </Link>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:name" element={<Region />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/hike/:hikeName" element={<Hikes />} />
          <Route path="/addhike" element={<AddHike />} />
          <Route path='/edithike:hikeName' element={<EditHike/>} />
        </Routes>
      </main>

      <footer className="footer">
                <div>
                    <p>
                        &copy; 2020 Thomas Hummel, Bella Maldonado, Gavin Southerland, <a href="mailto:Iyadabdulwahid23@gmail.com" class="footer__link">Iyad Abdulwahid</a>
                    </p>
                </div>
      </footer>

    </div>
  );
}

export default App;


