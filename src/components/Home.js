import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import list from '../list.json'
// import { WindMillLoading } from 'react-loadingg';
import { Rings } from 'react-loader-spinner'



const Home = () => {
  // const regions = {}
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  let regionList =
  list.map(e => 
    {
    return (
    <div>
      <div className="img1" key={e.id}>
        <p>
          <Link className="homeLinks" to={"/regions/" + e.region}> {e.name}</Link>
        </p>
      </div>
    </div>
    
  )});
  return (
  <div>
  {loading === true ? <div className='loading-icon'><Rings Audio color="#B2AC88" height={80} width={80} /></div>  : 
  <div>
  <h1 className = "title">Hikr</h1> 
  <div className="imgimg">{regionList}</div>
  </div>
  } 
  </div>
  
  )
  };




export default Home;
