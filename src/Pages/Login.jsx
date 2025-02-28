import React, { useState, useCallback } from 'react';

const InputField = ({ type, placeholder, value, onChange, required, minLength, showPasswordToggle }) => {
  return (
    <div className='w-full'>
      <input
        type={type}
        className='w-full px-3 py-2 border border-gray-800 rounded-md'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
      />
      {showPasswordToggle && (
        <button 
          type="button"
          className="text-sm mt-2 cursor-pointer text-gray-600"
          onClick={showPasswordToggle}
        >
          {type === 'password' ? 'Show Password' : 'Hide Password'}
        </button>
      )}
    </div>
  );
};

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = useCallback(async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");  
    console.log(formData);
  }, [formData]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
      </div>

      {currentState !== "Login" && (
        <InputField
          type='text'
          placeholder='Name'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      )}

      <InputField
        type='email'
        placeholder='Email'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <InputField
        type={passwordVisible ? 'text' : 'password'}
        placeholder='Password'
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
        minLength={6}
        showPasswordToggle={togglePasswordVisibility}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className='w-full flex justify-between text-sm mt-1'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {
          currentState === "Login"
          ? <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>Create Account</p>
          : <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login Here</p>
        }
      </div>

      <button className='w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-light py-2 mt-4 hover:bg-gray-700 rounded-md'>
        {currentState === "Login" ? 'Sign In' : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
