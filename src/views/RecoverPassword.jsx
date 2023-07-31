import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "flowbite-react";

const RecoverPassword = () => {
  return (
    <form className="h-auto text-center max-w-lg mx-auto rounded-lg bg-gray-600 p-5 mb-10 m-10">
        <label htmlFor="email" className="mb-2 text-2xl  text-gray-50">
            Your Email:
        </label>
        <input
            type="email"
            id="email"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 ml-5 border-gray-300 text-gray-900 text-sm rounded-lg p-4 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@Handyshop.com"
        />
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-900 dark:text-gray-400">
            We’ll never share your details. Read our{' '}
            <a href="#" className="font-medium text-red-900 hover:underline dark:text-blue-500">
            Privacy Policy
            </a>
            .
        </p>
        <NavLink to="/">
        <Button to="/"
        type="submit"
        className=" m-5 text-white bg-red-900 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
        </Button>
        </NavLink>
    </form>
  );
};

export default RecoverPassword;
                