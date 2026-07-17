import React,{useState, useEffect} from 'react'
import { Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10,Banner11 } from "../images";


const images = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Banner10,Banner11 ];

const Header = ({ title, image, type }) => {

  const [value, setvalue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setvalue((v) => {
        // return v === 4 ? 0 : v + 1;
        return v === images.length - 1 ? 0 : v + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className='w-full h-[100vh]' >
    <div className="relative w-full h-screen">
      <div className='relative w-full h-full bg-cover' >
        
        {/* <img src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt='Hero Image'
          className='w-full h-full '
        /> */}

      <img src={images[value]}
          alt='Hero Image'
          className='w-full h-full '
        />
        
      </div>

    

      <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
        <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        {
          type && (
            <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full '>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. 
              <br className='hidden md:block' /> Discover a treasure trove of
              delectable recipes from around the globe.So start exploring now.</p>
          )
        }
      </div>
    </div>
  )
}

export default Header