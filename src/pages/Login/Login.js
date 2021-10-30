import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { useLocation, useHistory } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';

const Login = () => {
  const { singInUsingGoogle, setError, setUser, singInUsingFacebook, setIsLoading } = useAuht()
  const location = useLocation()
  const location_url = location.state?.from;
  const history = useHistory()

  //google login
  const handleGoogle = (e) => {
    setIsLoading(true)
    e.preventDefault()
    singInUsingGoogle()
      .then(result => {
        setUser(result.user)
        console.log(result.user)
        history.push(location_url || '/')
      })
      .catch(error => setError(error))
      .finally(setIsLoading(false))
  }

  //facebook login
  const handlefacebook = (e) => {
    setIsLoading(true)
    e.preventDefault()
    singInUsingFacebook()
      .then(result => {
        setUser(result.user)
        console.log(result.user)
        history.push(location_url || '/')
      })
      .catch(error => console.log(error.message))
      .finally(setIsLoading(false))
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-2/5 m-auto bg-text_gray login'>
        <h1 className='text-center text-2xl py-3 text-white font-semibold bg-secondary'>Login Here</h1>
        <div className='loginBtn lg:flex items-center justify-between px-5 py-16 gap-6'>
          <div onClick={handleGoogle} className="google cursor-pointer flex-1 flex items-center h-12 gap-6">
            <div className="icon">
              <FaGoogle />
            </div>
            <p className='text-lg text-white font-semibold'>Google</p>
          </div>
          <div onClick={handlefacebook} className="facebook mt-4 lg:mt-0 cursor-pointer flex-1 flex items-center h-12 gap-6">
            <div className="icon">
              <FaFacebookF />
            </div>
            <p className='text-lg text-white font-semibold'>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;