import React from 'react';
import Common from './Common';
// import frontimg from '../src/images/frontimg.jpg';
// import blog2 from '../src/images/frontimg.jpg';
import blog2 from '../src/images/blog2.png';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={blog2}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;

// TILL 00:39:15
