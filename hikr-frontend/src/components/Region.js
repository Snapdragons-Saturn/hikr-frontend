import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Region = () => {
//   const { name } = useParams;
  const [region, setRegion] = useState();
  

  useEffect(() => {
    axios.get('').then((res) => {
    console.log(res)
    res.send(res.data)
      setRegion(res);
    });
  }, []);



  let regionList = region.map((e) => {
    return (
      //display region info below
      <div className="regionMap" key="">
       {e.hikeName}
       <img src="" alt="" />
        <Link className = "hikeLinks" to={"/hike/" + e.hikeName}>Edit Hike</Link>
      </div>

    );
  });

return <div><h1>hey!</h1> </div>

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