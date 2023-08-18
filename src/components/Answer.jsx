import { useEffect } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import adGeekLogo from '../assets/logo-w.png';

function Answer() {
  const { answerList } = useSelector((state) => state.user);
  const { filteredQuestions } = useSelector((state) => state.question);
  const navigate = useNavigate({ from: '/answer' });
  useEffect(() => {
    if (filteredQuestions.length === 0) {
      navigate({ to: '/' });
    }
  }, [filteredQuestions, navigate, answerList]);
  return (
    <div
      className='min-w-full bg-purple font-sans'
      style={{ minHeight: '100dvh' }}
    >
      <div className='h-full flex-col justify-center items-center text-white py-12 px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Answers</h2>
        <ul className='space-y-4 mb-10'>
          {filteredQuestions.map((question, index) => (
            <li
              key={question.index}
              className='bg-white p-4 rounded-lg shadow-md color-primary'
            >
              <p className='font-semibold text-lg mb-2 whitespace-pre-line'>{`${
                index + 1
              }. ${question.question}`}</p>
              <ul className='ml-0 space-y-2'>
                {question.options.map((option) => (
                  <li
                    key={option.label}
                    className={`flex items-center break-all ${
                      question.answer === option.label
                        ? 'text-green-500'
                        : question.answer !== answerList[index]
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}
                  >
                    <span className='font-bold mr-2'>{option.label}:</span>
                    {option.text.startsWith('http') ? (
                      <img
                        src={option.text}
                        alt={`Option ${option.label}`}
                        style={{ maxWidth: '100%', maxHeight: '100px' }}
                      />
                    ) : (
                      <span>{option.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <footer className='mt-auto text-white z-20 text-center'>
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
    </div>
  );
}
export default Answer;
