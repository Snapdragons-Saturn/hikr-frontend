import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Home = () => {
// const regions = {}

    return (
        <div className='big_div'>
            <div className='img1'>
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="hike" className="region_image" />
            </div>
                <div className='img_text1'>
                    <h4 className='text'>Hike/Region</h4>
                </div>

                <div className='img2'>
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  alt="hike" className="region_image" />
                </div>
                    <div className='img_text2'>
                        <h4 className='text'>Hike/Region</h4>
                    </div>

                <div className='img3'>
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  alt="hike" className="region_image" />
                </div>
                    <div className='img_text3'>
                        <h4 className='text'>Hike/Region</h4>
                    </div>
                <div className='img4'>
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  alt="hike" className="region_image" />
                </div>
                    <div className='img_text4'>
                        <h4 className='text'>Hike/Region</h4>
                    </div>
        </div>
        
    );
  }
  
export default Home;


