import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import list from '../list.json'

const Home = () => {
  // const regions = {}

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
  return <div>{regionList}</div>;
  };



export default Home;
