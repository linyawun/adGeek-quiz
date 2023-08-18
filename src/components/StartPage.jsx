import { useNavigate } from '@tanstack/react-router';
import adGeekLogo from '../assets/logo-w.png';
import { useDispatch } from 'react-redux';
import { setFilterQuestion } from '../slice/questionSlice';
import { resetUser, setType } from '../slice/userSlice';
import { useEffect } from 'react';

function StartPage() {
  const navigate = useNavigate({ from: '/' });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetUser());
  }, [dispatch]);

  const handleStart = (type) => {
    dispatch(setType(type));
    dispatch(setFilterQuestion(type));
    navigate({ to: '/question' });
  };

  return (
    <div
      className='min-w-full bg-purple font-sans'
      style={{ height: '100dvh' }}
    >
      <div className='h-full flex justify-center items-center'>
        <div className='w-4/5 container mx-auto z-20'>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfTUnJfTl-4893KFE1OF1-NKVpAyAzBzGLnHJmo5g4NxNZZSw/viewform'
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <img
              src={adGeekLogo}
              alt='adgeek Logo'
              className='mb-4 w-3/5 mx-auto'
            />
          </a>
          {/* <img src={adGeekLogo} alt='logo' className='mb-4 w-3/5 mx-auto' /> */}
          <h1 className='mb-16 text-center text-white text-3xl font-bold'>
            Quick Quiz 💡
          </h1>
          <div className='flex flex-col justify-between gap-6'>
            <button
              className='flex-1 button-secondary font-bold text-2xl py-6 px-5 rounded-lg transform  active:scale-95'
              onClick={() => handleStart('frontend')}
            >
              Frontend
            </button>
            <button
              className='flex-1 button-white font-bold text-2xl py-6 px-5 rounded-lg transform  active:scale-95'
              onClick={() => handleStart('backend')}
            >
              Backend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
