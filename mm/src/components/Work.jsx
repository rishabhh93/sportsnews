import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://www.wsupercars.com/wallpapers-regular/Formula-1/Scuderia-Ferrari/2024-Formula1-Ferrari-SF-24-003-1600.jpg",
      top: "56%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
      top: "52%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1676927066367-92d6a345e932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
      top: "55%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://c4.wallpaperflare.com/wallpaper/1020/301/239/bike-gran-motogp-motorbike-wallpaper-preview.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showNhideimages(Math.floor(latest * 100));
  });

  function showNhideimages(latest) {
    // console.log(latest);
    const updatedImages = images.map((image, index) => {
      if (latest >= 1 && index === 0) {
        return { ...image, isActive: true };

      }
      if(latest>=2&&index==1){
      
          return {...image,isActive:true}
        
      }
      
      if(latest>=3&&index==2){
      
        return {...image,isActive:true}
      
      }
      if(latest>=4&&index==3){
        return {...image,isActive:true};
      }
      if(latest>=5&&index==4){
        return {...image,isActive:true};
      }
      if(latest>=6&&index==5){
        return {...image,isActive:true};
      }
      // Add more conditions here if you want to show other images at different scroll positions
      return image;
    });

    setImages(updatedImages);
  }

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="mx-20 text-[20vw] font-medium leading-none tracking-tight">Noticias</h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((image, index) =>
            image.isActive && (
              <img
                key={index}
                className="absolute w-52 rounded-lg translate-x-[-25%] translate-y-[-10%]"
                src={image.url}
                alt={`Work image ${index + 1}`}
                style={{ top: image.top, left: image.left }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;