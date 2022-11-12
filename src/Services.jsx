import React from 'react';
import Cards from './Cards';
// import frontimg from '../src/images/frontimg.jpg';
import Sdata from './Sdata';
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Latest Blogs</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
               {
                Sdata.map((val,ind)=>{
                  return <Cards
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  subtitle={val.subtitle}
                  link={val.link}
                  />
                })           
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
