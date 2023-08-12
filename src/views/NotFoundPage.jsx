import React from 'react';


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className= "duration-700 ease-in-out"data-carousel-item>
          <img src="https://www.iebschool.com/blog/wp-content/uploads/2015/06/error-404.png" alt="Error 404" />
        </div>
      <h1 className="text-xl mt-4 font-medium">Oops! Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;