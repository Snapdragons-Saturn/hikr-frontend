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
      <div className="countryList" key={e.id}>
        <p>
          <Link className="countryLinks" to={"/regions/" + e.region}> {e.name}</Link>
        </p>
      </div>
  )});
  return (
  <div>
  {loading === true ? <div><WindMillLoading/></div> : <div>{regionList}</div>};
  </div>
  )
  };




export default Home;
