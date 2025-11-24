import loginImg from '../assets/img/loginimg.png';
import manExit from '../../public/icons/exitdoor.svg';

const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={loginImg} alt="login image" className='w-full h-full object-cover' />
      <section className='absolute top-20 bg-white/10 backdrop-blur-2xl p-8 rounded-lg shadow-lg max-w-md w-full'>
        <img src={manExit} alt="man inside door" className='w-20 h-20 mx-auto mb-4' />
        <div className='text-center'>
          <h1 className=''>Sign in with email</h1>
          <p>Make sure to use the email address you used to create your account</p>
        </div>
        <form action="" className='flex flex-col gap-4 mt-4'>
          <input type="text" placeholder='Email' />
          <input type="number" placeholder='Password' />
          <p className='text-end hover:underline hover:text-blue-700'>Forgot password?</p>
          <button type="submit">Sign In</button>
        </form>
      </section>
    </div>
  )
}

export default Login;