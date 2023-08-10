import React from 'react';


const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
      src={'img404'}
        
        alt="404 Not Found"
        className="max-w-full h-auto"
      />
      <h1 className="text-xl mt-4">Oops! Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;