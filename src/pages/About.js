import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
   return (
      <>
      <Helmet>
         <title>About Travel Friends</title>
         <meta name='description' content='Travel to the world with travel friends' />
         <meta name='keywords' content='travel, travel tours, traveler' />       
      </Helmet>
      <h1>About page</h1>
      </>
   );
}

export default About;