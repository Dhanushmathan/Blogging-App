import loginImg from '../assets/img/loginimg.png';
import manExit from '../assets/icons/exitdoor.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Services/auth';
import { toast, ToastContainer } from 'react-toastify';
import { useCurrentUser } from '../context/UserContext';

const Login = () => {
  const { setCurrentUser, setToken } = useCurrentUser();
  const navigate = useNavigate();
  const currentDate = new Date();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      console.log(res);

      setToken(res.data.token);
      setCurrentUser(res.data.user);
      toast.success("Login Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error(`Login failed: ${error.response.data}`, {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={loginImg} alt="login image" className='w-full h-full object-cover' />
      <section className='absolute top-25 bg-white/10 backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full'>
        <img src={manExit} alt="man inside door" className='w-20 h-20 mx-auto mb-4' />
        <div className='text-center space-y-1'>
          <h1 className='text-2xl font-bold'>Login with Email</h1>
          <p className='text-sm text-gray-400'>Make sure to use the email address you used to create your account</p>
        </div>
        <form action="" className='flex flex-col mt-7' onSubmit={handleSubmit}>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="64" strokeDashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path><path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0" /></path></g></svg>
            <input
              id="email"
              type="email"
              placeholder='Email'
              className='bg-gray-500/20 outline-none p-2 rounded-sm pl-10 w-full'
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <label htmlFor="password" className='sr-only'>Password</label>
          <div className='relative mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"><path fill="currentColor" d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z" /></svg>
            <input id='password' type={showPassword ? 'text' : 'password'} placeholder='Password' className='bg-gray-500/20 outline-none p-2 rounded-sm pl-10 w-full' required onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button
              type="button"
              onClick={() => setShowPassword(s => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // eye-off icon
                <div title='Hide'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 cursor-pointer"><path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" /></svg>
                </div>
              ) : (
                // eye icon
                <div title='Show'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
                </div>
              )}
            </button>
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
      </section>
      <ToastContainer />
      <footer className='absolute bottom-0 w-full text-center py-4 text-sm font-semibold'>
        <p>&copy; {currentDate.getFullYear()} Blog App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;