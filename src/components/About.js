import React, {useState, useEffect} from 'react';
// import { WindMillLoading } from 'react-loadingg';


const About = () => {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
      }, [])
    
    return (
    <div>
    {/* {loading === true ? ( <div><WindMillLoading/></div>) : ( */}
        <div className='about_text'>
            <h1>
                <em>
                WELCOME TO HIKR!
                </em>
            </h1>  
            <p className='site_discription'>
            We aim to create an application which provides a platform for users to add and save hikes in their area. While supplying a database that holds a variety of hikes from different regions for users to save and enjoy. 
            </p>
        </div>
    {/* ) */}
    {/* } */}
    </div>
    );
};

export default About;