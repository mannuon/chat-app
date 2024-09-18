'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import axios from 'axios';



export default function Login() {




  
  


  const router = useRouter();
  const [formData, setFormData] = useState({
    userMail: '',
    password: '',
  });

  const handleChange =   (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(`http://localhost:3001/api/auth/login`,formData)

      if(res.status === 200){
        const token = '$myToken ' + res.data.token
        console.log(token)
        if(token){
          console.log(token)
          localStorage.setItem('token', token);
        }
        toast.success('login successfully !')
        router.push('/dashboard')

      }
      else{
        toast.error('Something went wrong')
      }
      
    } catch (error) {


      if(error.status=== 401){
        toast.error('Invalid credentials')
      }
      
      
    }
    

   
  };

  const handleSignupRedirect = () => {
    router.push('/signup');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="userMail" className="block text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              id="userMail"
              name="userMail"
              value={formData.userMail}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Don't have an account? */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <button
              onClick={handleSignupRedirect}
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Sign Up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
