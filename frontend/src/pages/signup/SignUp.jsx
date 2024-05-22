import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import {useState} from "react"
import useSignup from '../../hooks/useSignup'


const SignUp = () => {

    const [inputs , setInputs] = useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword: "",
        gender:""
    })

    const {loading , signup} = useSignup()

    const handleCheckbox = (gender)=>{
        setInputs({...inputs,gender:gender})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await signup(inputs);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className=' w-full p-6 rounded-lg bg-white-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 '>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up 
              <span className='text-blue-500'> BlinkChat</span>
            </h1>

            <form onSubmit={handleSubmit} >
              <div>
                  <label className='label p-2'>
                      <span className='text-base label-text'>Full Name</span>
                  </label>
                  <input type="text" placeholder='Md Irfan' className='w-full input input-bordered h-10'
                  value = {inputs.fullName}
                  onChange={(e)=>setInputs({...inputs,fullName: e.target.value})}
                  />
              </div>

              <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='itsmdirfan_tw' className='w-full input input-bordered h-10'
                    value = {inputs.username}
                    onChange={(e)=>setInputs({...inputs,username: e.target.value})}
                    />
              </div>

              <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                    value = {inputs.password}
                    onChange={(e)=>setInputs({...inputs,password: e.target.value})}
                    />
              </div>

              <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'
                    value = {inputs.confirmPassword}
                    onChange={(e)=>setInputs({...inputs,confirmPassword: e.target.value})}
                    />
              </div>

              <GenderCheckBox onCheckBoxChange={handleCheckbox} selectedGender={inputs.gender}/>

              <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block '>
                    Already have a account?
              </Link>

              <div>
                    <button className='btn btn-block btn-sm mt-2'>SignUp</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default SignUp
