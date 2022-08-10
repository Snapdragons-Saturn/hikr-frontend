import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
// import { WindMillLoading } from 'react-loadingg';

function Region() {
  const { region } = useParams();
  const [hike, setHike] = useState([]);
  const [loading, setLoading] = useState(true);

   console.log(region)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])


  useEffect(() => {
    getHikes()
  }, []);
  const getHikes = () => {
    axios.get(`https://desolate-ocean-19551.herokuapp.com/api/hikes/regions/${region}`).then((res) => {
      console.log(res.data)
        setHike(res.data);
      });
  }
  let hikeList = hike.map((e) => {
    return (
      //display region info below
      <div className="regionMap" key="">
      <Link className = "hikeLinks" to={"/hike/" + e._id}>{e.hikeName}</Link>
       <img classname = "regionImage"src={e.img_url} alt={e._id} />
      </div>
    );
  });
return (
    <>
      {/* {loading === true ? <div><WindMillLoading/></div> : <div>{hikeList}</div>} */}
    </>
  )
}
export default Region;
//ok, what do I do here?
//need to grab the hikes from the database and set them to state
//for each one need to create a div with a description of the hike, possibly a picture?
//each one needs to have an edit button, when the edit button is clicked it brings up the edit paged
//the edit page will have a button that allows users to delete the hike, and a form to edit a specific portion of the hike
//the bottom of the page will have a link that brings people to a add hike page
//add a hikes component that sits in the regions component - contains detailed info on the hike and the ability to edit/delete
//decide upon regions, what states they include, and throw a region property into hike schema
//add images as a property