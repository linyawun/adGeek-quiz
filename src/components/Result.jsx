import adGeekLogo from '../assets/logo-w.png';
import { Link } from '@tanstack/react-router';
import { useScoreContext } from '../context/ScoreContext';

function Result() {
  const { score } = useScoreContext();

  return (
    <div
      className='bg-purple flex flex-col justify-center items-center text-white text-center'
      style={{ height: '100dvh' }}
    >
      <div className='flex flex-col justify-center items-center flex-grow z-10'>
        <h2 className='text-2xl mb-10'>Congratulations! Your score is</h2>
        <div className='text-6xl fond-bold w-5/6 text-white  py-5 text-center'>
          {Math.round(score) > 100 ? 100 : Math.round(score)}
        </div>
      </div>
      <footer className='mt-auto text-white py-4 z-20'>
        <Link
          to='/'
          className='text-gray-300 font-medium text-lg underline hover:text-gray-100 cursor-pointer'
        >
          Back to Home
        </Link>
        <div className='mt-5 mx-auto flex justify-center items-center w-2/6'>
          <a
            href='https://www.adgeek.com/'
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
