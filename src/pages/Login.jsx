import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div dir='rtl'>
        <Navbar />
      <div className="w-full max-w-xs mx-auto mt-32">
        <form className="bg-white shadow-md rounded px-8 pt-10 pb-12 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              اسم المستخدم
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               كلمة المرور
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="******************" 
            />
            
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              التسجيل
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              هل نسيت كلمة المرور؟
            </a>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login
