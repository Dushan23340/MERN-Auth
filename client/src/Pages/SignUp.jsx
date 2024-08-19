import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

  };

    const handlesubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        setError(false);
        const res = await fetch('/api/auth/signup',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          });
        const data = await res.json();
        console.log(data);
        setLoading(false);
        if(data.success == false){
          setError(true);
          return;
        }
        
      } catch (error) {
        setLoading(false);
        setError(true);

      }
      
    };
  
  return (
    <div className='flex justify-center items-center h-screen bg-white-100'>
      <div className='flex w-full max-w-5xl bg-white rounded-lg'>
        {/* Left side div */}
        <div className='w-1/2 p-8 flex flex-col items-center bg-white-200'>
          <img src="src/assets/images/logo.png" alt="Logo" className="h-45 w-auto " />
          <p className="text-center text-lg font-bold text-gray-700 pb-40">
            JOIN WITH US TO GET PURIFIED WATER TO YOUR DOOR STEP AND LET US GIVE
            YOU YOUR FAVOURITE WATER.
          </p>
        </div>

        {/* Right side form div */}
        <div className='w-1/2 p-8 flex flex-col justify-center pb-64 pl-10'>
          <h1 className='text-3xl text-center font-semibold mb-8 font-serif'>Sign Up</h1>
          <form onSubmit={handlesubmit}className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Username'
              id='username'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
              onChange={handleChange}
            />
            <input
              type='text'
              placeholder='Email'
              id='email'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              id='password'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Re-enter Password'
              id='re-enter-password'
              className='bg-gray-100 p-3 rounded-lg border border-gray-300'
              onChange={handleChange}
            />
         <button disabled={loading} className='bg-gradient-to-r from-[#4778F5] to-[#0056D2] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
  {loading ? 'Loading...' : 'Sign Up'}
</button>

          </form>
          <div className='flex justify-center gap-2 mt-6'>
            <p>Have an account?</p>
            <Link to='/sign-in'>
              <span className='text-blue-500 cursor-pointer'>Sign In</span>
            </Link>
          </div>
          <p className='text-red-700 mt-5'>{error && 'Something went wrong, please try again'}</p>
        </div>
      </div>
    </div>
  );
  }
