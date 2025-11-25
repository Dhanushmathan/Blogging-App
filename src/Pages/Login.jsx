import loginImg from '../assets/img/loginimg.png';
import manExit from '../assets/icons/exitdoor.svg';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={loginImg} alt="login image" className='w-full h-full object-cover' />
      <section className='absolute top-25 bg-white/10 backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full'>
        <img src={manExit} alt="man inside door" className='w-20 h-20 mx-auto mb-4' />
        <div className='text-center space-y-1'>
          <h1 className='text-2xl font-bold'>Sign in with Email</h1>
          <p className='text-sm text-gray-400'>Make sure to use the email address you used to create your account</p>
        </div>
        <form action="" className='flex flex-col mt-7'>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="64" strokeDashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path><path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0" /></path></g></svg>
            <input
              id="email"
              type="email"
              placeholder='Email'
              className='bg-gray-500/20 outline-none p-2 rounded-sm pl-10 w-full'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="password" className='sr-only'>Password</label>
          <div className='relative mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"><path fill="currentColor" d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" /></svg>
            <input id='password' type="password" placeholder='Password' className='bg-gray-500/20 outline-none p-2 rounded-sm pl-10 w-full' required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <p className='text-end hover:underline hover:text-blue-700 text-sm text-gray-500 font-medium mt-2'>Forgot password?</p>
          <button type="submit" className='px-2 py-2 mt-4 border-none outline-none bg-gray-900 text-white rounded-md cursor-pointer'>Sign In</button>
        </form>
        <p className='text-center text-gray-600 text-[12px] mt-5'>----- Or Sign in With -----</p>
        <div className='flex items-center justify-between mt-4'>
          <button className='px-10 py-2 outline-non rounded-md cursor-pointer shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd" clipRule="evenodd"><path fill="#F44336" d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86" opacity=".987" /><path fill="#FFC107" d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92" opacity=".997" /><path fill="#448AFF" d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49" opacity=".999" /><path fill="#43A047" d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z" opacity=".993" /></g></svg>
          </button>
          <button className='px-10 py-2 outline-none rounded-md cursor-pointer shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg>
          </button>
          <button className='px-10 py-2 outline-none rounded-md cursor-pointer shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 128 128"><path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796" /></svg>
          </button>
        </div>
      </section >
    </div >
  );
}

export default Login;