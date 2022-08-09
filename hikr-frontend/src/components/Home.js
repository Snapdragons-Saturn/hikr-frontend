import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import list from '../list.json'
import { WindMillLoading } from 'react-loadingg';



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
  {loading === true ? <div><WindMillLoading height="large"/></div>  : <div>{regionList}</div>}
  </div>
  )
  };




export default Home;
