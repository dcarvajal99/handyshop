import React, { useState } from 'react';

const CarouselMain = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
  };

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className={activeIndex === 1 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
          <img src="https://www.anypsa.com.pe/aplication/webroot/imgs/catalogo/180511022839pintura%20acrilica%20y%20sintetica.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 2 */}
        <div className={activeIndex === 2 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item="active">
          <img src="https://webstatic.patumovil.com/wp-content/uploads/2023/07/cerradurasinteligentespatumovil.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 3 */}
        <div className={activeIndex === 3 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
          <img src="https://2.bp.blogspot.com/-oDcmj1PfpYY/W9W-lcbhhMI/AAAAAAAADF8/UhpBG8eZZ-Qnr4QXINZVKOkx8iPhLP3YgCLcBGAs/s1600/clasificacion%2Bresiduos.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 4 */}
        <div className={activeIndex === 4 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
          <img src="https://www.lamudi.com.mx/journal/wp-content//uploads/2022/02/ARQUTECTURA-SOSTENIBLE-1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* Item 5 */}
        <div className={activeIndex === 5 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
          <img src="https://www.bettinafrumboli.com/wp-content/uploads/2023/05/Tendencias-de-color-y-corte-de-cabello-oton%CC%83o-invierno-2023-01-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev} data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext} data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselMain;
