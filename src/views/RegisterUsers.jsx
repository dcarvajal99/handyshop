import React from 'react';

const RegisterUsers = () => {
  return (
    <form className=" bg-gray-600 w-1/2 mx-auto p-10 mb-10 m-10 rounded-lg">
      <div className="relative z-0 w-full mb-6 group ">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:border-gray-900 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_repeat_password"
          className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Confirm password
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-Gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-Gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_last_name"
            className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-Gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_phone"
            className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-900 appearance-none dark:text-white dark:border-gray-900 dark:focus:border-Gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="peer-focus:font-medium absolute text-xl font-bold text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Dirección
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-gray-50 bg-red-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-m px-5 py-2.5 text-center dark:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterUsers;
