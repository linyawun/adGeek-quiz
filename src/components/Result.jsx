import adGeekLogo from '../assets/logo-w.png';
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Medal from './Medal';

function Result() {
  const navigate = useNavigate({ from: '/result' });
  const { type } = useSelector((state) => state.user);
  useEffect(() => {
    if (!type) {
      navigate({ to: '/' });
    }
  }, [navigate, type]);

  return (
    <div
      className='bg-purple flex flex-col justify-center items-center text-white text-center font-sans'
      style={{ height: '100dvh' }}
    >
      <div className='flex flex-col px-10 justify-center items-center flex-grow z-10'>
        <h2 className='text-3xl mb-10'>Congratulations! Your score is</h2>
        <Medal />
      </div>
      <footer className='mt-auto text-white py-6 z-20'>
        <Link
          to='/answer'
          className='text-gray-300 font-medium text-lg hover:text-gray-100 mr-10'
        >
          👀 See Answers
        </Link>
        <Link
          to='/'
          className='text-gray-300 font-medium text-lg hover:text-gray-100 '
        >
          🏘 Back to Home
        </Link>
        <div className='mt-8 mx-auto flex justify-center items-center w-2/6'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfTUnJfTl-4893KFE1OF1-NKVpAyAzBzGLnHJmo5g4NxNZZSw/viewform'
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <img src={adGeekLogo} alt='adgeek Logo' />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Result;
