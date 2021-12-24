import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
   return (
      <>
      <Helmet>
         <title>Page not found</title>
         <meta name='description' content='Travel to the world with travel friends' />
         <meta name='keywords' content='travel, travel tours, traveler' />       
      </Helmet>
      <h1>Page not found</h1>
      </>
   )
}

export default NotFound;