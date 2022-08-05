import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Home = () => {
const regions = ['']

  let regionList = regions.map((e) => {
    return (
      <div className="regionMap" key="">
        <p>
          <Link
            className="c"
            to={"/region/" + e}
          >
            <img 
                src =''
                alt=''
            />
          </Link>
          <h2>{e}</h2>
        </p>
      </div>
    );
  });
  return <div>{regionList}</div>;
};

export default Home;
