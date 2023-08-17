import { useNavigate } from '@tanstack/react-router';
import adGeekLogo from '../assets/logo-w.png';

function StartPage() {
  const navigate = useNavigate({ from: '/' });

  return (
    <div className=' min-w-full bg-purple' style={{ height: '100dvh' }}>
      <div className='h-full flex justify-center items-center'>
        <div className='w-4/5 container mx-auto'>
          <img src={adGeekLogo} alt='logo' className='mb-8 w-3/5 mx-auto' />
          <h1 className='mb-10 text-center text-white text-2xl'>adGeek Quiz</h1>
          <button
            className='w-full bg-indigo-500/70 hover:bg-indigo-400 text-white font-bold text-2xl py-4 px-5 border-b-4 border-indigo-700 hover:border-indigo-500 rounded-lg transform transition-transform active:scale-95 '
            onClick={() => navigate({ to: '/question' })}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
