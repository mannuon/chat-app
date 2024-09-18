'use client'


import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import 'dotenv/config'
import { toast } from 'react-hot-toast';



export default function Signup() {

  const router = useRouter();


  const [formData, setFormData] = useState({
    userName: '',
    userMail: '',
    userPhone: '',
    userRole: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleLoginRedirect = () => {
    router.push('/signin'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      
        const response = await axios.post(`http://localhost:3001/api/auth/register`, formData)

       if (response.status === 200) {
        console.log('User registered successfully:', response.data);
        toast.success('User created successfully!')
        router.push('/signin'); 
        }
        else if(response.status === 409) {
          toast.success('user already register')

        }else{
          toast.success('something went wrong !!')
        }


    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Name
            </label>
            <input
            placeholder="Your Name"
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="userMail" className="block text-sm font-bold">
              Email
            </label>
            <input
            placeholder="example@gmail.com"
              type="email"
              id="userMail"
              name="userMail"
              value={formData.userMail}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="userPhone" className="block text-sm font-bold">
              Phone Number
            </label>
            <input
              placeholder="+91-737098***"
              type="tel"
              id="userPhone"
              name="userPhone"
              value={formData.userPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          {/* role */}
          <div>
            <label htmlFor="userRole" className="block text-sm font-bold">
              Role
            </label>
            <select
    
              id="userRole"
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-200"
              required
            >
              <option value="">Select a Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="institute">Institute</option>
            </select>
          </div>


           {/* Password  */}
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
              Sign Up
            </button>
          </div>
        </form>


         {/* Already have an account? */}
         <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <button
              onClick={handleLoginRedirect}
              className="text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Login here
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}
