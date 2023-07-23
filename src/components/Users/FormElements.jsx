import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de envío del formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Container text-center  mt-10 bg-gray-500">
        <div className="mb-6 text-center items-center">
          <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white pt-5">Your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="inline-flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2rem p-2.5 "
              placeholder="name@handyshop.com"
              required
            />
        </div>
        <div className="mb-6 text-center items-center">
          <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900">Your password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="inline-flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2rem p-2.5 "
              placeholder="**********"
              required
            />
        </div>
        <div className="block-flex items-center mb-6">
          <div className="h-5">
            <input
              id="remember"
                type="checkbox"
                value={rememberMe}
                onChange={handleRememberMeChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                required
            />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
        </div>
        <button type="submit"
          className="text-white bg-blue-700 font-medium rounded-xl text-xl w-auto p-3 m-5 text-center">
            Submit
        </button>
      </div>
    </form>
    
  );
};

export default LoginForm;
