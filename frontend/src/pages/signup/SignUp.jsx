import React from 'react'
import { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup  from '../../hooks/useSignup.js'


function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const handleGenderChange = (gender) => { 
    setInputs({...inputs, gender })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);

    // setInputs('')
  }

  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
      
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          {/* <span className='text-blue-500 p-4'>Chit-Chat </span> */}
        </h1>

        <form onSubmit={handleSubmit} className='mt-6'>
          <div className='mb-4'>
            <label htmlFor='fullName' className='lable pb-2 block text-sm font-medium text-gray-600'>
              <span className=''>Full Name</span>
            </label>
            <input
              type='text'
              // name='fullName'
              // id='fullName'
              placeholder='Enter fullName'
              className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900  input input-bordered'

              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='userName' className='lable pb-2 block text-sm font-medium text-gray-600'>
              <span className=''>Username</span>
            </label>
            <input
              type='text'
              // name='userName'
              // id='usernName'
              placeholder='Enter userName'
              className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900  input input-bordered'

              value={inputs.userName}
              onChange={(e) => setInputs({...inputs, userName: e.target.value })}
            />
          </div>
      
          <div className='mb-4'>
            <label htmlFor='password' className='lable pb-2 block text-sm font-medium text-gray-600'>
              <span className=''>Password</span>
            </label>
            <input
              type='password'
              // name='password'
              // id='password'
              placeholder='Enter password'
              className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900  input input-bordered'

              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value })}
            />
          </div>
          
          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='lable pb-2 block text-sm font-medium text-gray-600'>
              <span className=''>Confirm Password</span>
            </label>
            <input
              type='password'
              // name='confirmPassword'
              // id='confirmPassword'
              placeholder='Confirm password'
              className='mt-1 p-2 w-full border border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 bg-zinc-900  input input-bordered'

              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckBox onChackboxChange={handleGenderChange} selectedGender={inputs.gender } />

          <Link to={'/login'} className='text-sm font-medium text-gray-600 hover:underline hover:text-blue-600'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block mt-4 p-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-blue-500
          disabled={loading}'>
              {loading ? <span className='loading loading-spinner'></span> :"Sign Up"}
          </button>
          </div>
                    
          {/* <div className='flex items-center justify-between'>
            <button type='submit' className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600'>
              Sign Up
            </button>
            <a href='#' className='text-sm font-medium text-gray-600 hover:underline hover:text-blue-600'>
              {"Already"} have an account?
            </a>
          </div> */}
          
        </form>

        </div>
      </div>
  )
}

export default SignUp