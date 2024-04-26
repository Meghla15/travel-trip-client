import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import {Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  toast } from 'react-toastify';
import SocialLogin from '../Components/SocialLogin/SocialLogin';

const Login = () => {
    const {signInUser} =UseAuth();
	const navigate = useNavigate();
	const from = "/";

	const {register,handleSubmit,formState: { errors }} = useForm();

	const onSubmit = data =>{
         const {email, password} =data;
         signInUser (email,password)
         .then(result =>{
            toast.success("Login Successfully")
            navigate(from)
            console.log(result)
         })
         .catch(error =>{
            toast.error("Invalid Email or Password ")
            console.log(error)
         });

	}
    
    return (
        <section className="p-6 bg-green-100 dark:text-gray-800 container mx-auto rounded-2xl mb-14">
	<div className=" grid gap-4 text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 lg:col-span-2 col-span-3 bg-gray-100 border-[1px] border-slate-300 animate__animated animate__bounceInLeft">
        
			
			<form  onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="self-stretch space-y-3">
				<h1 className='text-3xl font-extrabold font-neon mb-6'>Please Login Here</h1>
				<div>
				<label htmlFor="name" className="block mb-1 ml-1 text-start"> Name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
					
				</div>
				<div>
				<label htmlFor="email" className="block mb-1 ml-1 text-start">Email Address</label>
					<input {...register("email", { required: true })} id="email" type="email" placeholder="Email address" className="w-full p-3 rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
					{errors.email && <span className='text-red-600'>This field is required</span>}
				</div>
				<div>
				<label htmlFor="password" className="block mb-1 ml-1 text-start">Password</label>
					<input {...register("password", { required: true })} id="password" type="password" placeholder="password" className="w-full p-3 rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
					{errors.password && <span className='text-red-600'>This field is required</span>}
				</div>
                <div className='flex justify-between'>
                <span>Forget Password?</span>
                <Link to="/register"><span className='text-blue-700 font-bold'>Register</span></Link>
                </div>
				<div>
                <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-600 text-white">Login</button>
				
				
				
            </div>
			</form>
			<SocialLogin></SocialLogin>
            
		</div>
		<div className='col-span-3 mt-14 animate__animated animate__bounceInRight'>
             <h1 className="text-4xl  font-extrabold dark:text-gray-900">Build Connection With Us</h1>
             <p className='font-neon mt-10 w-2/3 mx-auto text-center text-gray-600'>We value the opportunity to connect with our community of homeowners, renters, and property enthusiasts. Whether you have questions about a specific property, need assistance navigating our platform, or simply want to share feedback, we're here to listen and assist you. Connect with us through our various channels whether it's through email, phone, or social media and let's start a conversation. Your input is invaluable to us as we continually strive to improve and enhance your experience with Your BeHome. We look forward to hearing from you and building a lasting connection together</p>
             </div>
	</div>
</section>
    );
};

export default Login;