import loginImg from '../assets/img/loginimg.png';
import manExit from '../assets/icons/exitdoor.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../Services/auth';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      toast.success("Registration successful! Please login.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  }


  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={loginImg} alt="login image" className='w-full h-full object-cover' />
      <section className='absolute top-25 bg-white/10 backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full'>
        <img src={manExit} alt="man inside door" className='w-20 h-20 mx-auto mb-4' />
        <div className='text-center space-y-1'>
          <h1 className='text-2xl font-bold'>Sign Up with Email</h1>
          <p className='text-sm text-gray-400'>Make sure to use the email address you used to create your account</p>
        </div>
        <form action="" className='flex flex-col mt-7' onSubmit={handleSubmit}>
          <label htmlFor="name" className="sr-only">Username</label>
          <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
            <input
              id="name"
              name='name'
              type="text"
              placeholder='Username'
              className='bg-gray-500/20 outline-none p-2 rounded-sm pl-10 w-full'
              required
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className='relative mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="64" strokeDashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path><path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0" /></path></g></svg>
            <input
              id="email"
              name='name'
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
            <input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='bg-gray-500/20 outline-none p-2 rounded-sm pl-10 pr-10 w-full'
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(s => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                // eye-off icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" /></svg>
              ) : (
                // eye icon
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
              )}
            </button>
          </div>
          <p className='text-end hover:underline hover:text-blue-700 text-sm text-gray-500 font-medium mt-2'>Forgot password?</p>
          <button type="submit" className='px-2 py-2 mt-4 border-none outline-none bg-gray-900 text-white rounded-md cursor-pointer'>Register</button>
        </form>
        <p className='text-gray-700 text-sm mt-3'>Already have an account?{" "}
          <Link to='/login' className='text-blue-600 underline font-medium'>Login</Link>
        </p>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Register;