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
      <div className="countryList" key={e.id}>
        <p>
          <Link className="countryLinks" to={"/regions/" + e.region}> {e.name}</Link>
        </p>
      </div>
      {/* <div className='img1'>
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="hike" className="region_image" />
              </div> */}
    </div>
    
  )});
  return (
  <div>
  {loading === true ? <div><WindMillLoading/></div> : <div>{regionList}</div>};
  </div>
  )
  };




export default Home;
