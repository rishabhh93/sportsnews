import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

function Work() {
  const [images, setImages] = useState([
    {
      url: "/work-ferrari.jpg", // ✅ move into public/
      top: "56%",
      left: "50%",
      isActive: false,
    },
    {
      url: "/work-unsplash1.jpg",
      top: "52%",
      left: "45%",
      isActive: false,
    },
    {
      url: "/work-yahoo.png",
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      url: "/work-unsplash2.jpg",
      top: "55%",
      left: "47%",
      isActive: false,
    },
    {
      url: "/work-motogp.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.floor(latest * 100);
    setImages((prevImages) =>
      prevImages.map((image, index) => ({
        ...image,
        isActive: progress >= index + 1,
      }))
    );
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="mx-20 text-[20vw] font-medium leading-none tracking-tight">
          Noticias
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (image, index) =>
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
