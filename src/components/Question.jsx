import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setScore, addAnswerItem } from '../slice/userSlice';

function Question() {
  const navigate = useNavigate({ from: '/question' });
  const dispatch = useDispatch();
  const { filteredQuestions } = useSelector((state) => state.question);
  const { answerList, type } = useSelector((state) => state.user);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = filteredQuestions[currentIndex];
  const [timeRemaining, setTimeRemaining] = useState(20000);
  const progressBarWidth = `${(timeRemaining / 20000) * 100}%`;

  useEffect(() => {
    if (!type) {
      navigate({ to: '/' });
    }
  }, [dispatch, navigate, type]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1000);
      }
    }, 1000);
    if (timeRemaining === 0) {
      setTimeRemaining(1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  useEffect(() => {
    if (answerList.length === filteredQuestions.length) {
      const correctCount = answerList.filter((answer, index) => {
        return answer === filteredQuestions[index].answer;
      }).length;
      dispatch(setScore(correctCount));
      navigate({ to: `/result` });
    }
  }, [answerList, filteredQuestions, dispatch, navigate]);

  const handleAnswer = (label) => {
    dispatch(addAnswerItem(label));
    if (currentIndex >= filteredQuestions.length - 1) {
      if (answerList.length !== filteredQuestions.length) {
        navigate({ to: '/' });
      }
    } else {
      setCurrentIndex((pre) => pre + 1);
      setTimeRemaining(20000);
    }
  };

  return (
    <div
      className='min-w-full flex flex-col justify-between relative font-sans'
      style={{ height: '100dvh' }}
    >
      <div
        className=' block-a text-2xl p-5 flex-grow flex items-center justify-center cursor-pointer'
        style={{ height: '50dvh' }}
        data-label={currentQuestion?.options[0]?.label}
        onClick={() => handleAnswer(currentQuestion.options[0]?.label)}
      >
        {currentQuestion?.options[0]?.text.startsWith('http') ? (
          <img
            src={currentQuestion?.options[0]?.text}
            alt={`Option ${currentQuestion?.options[0]?.label}`}
            className='mb-14'
            style={{ maxWidth: '100%', maxHeight: '80%' }}
          />
        ) : (
          <p className='mb-14 break-all'>{currentQuestion?.options[0]?.text}</p>
        )}
      </div>
      <div className='w-5/6 bg-primary border-2 border-white rounded-lg px-4 py-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow-lg text-white'>
        <p className='absolute text-xs bottom-0 right-0 text-indigo-200 m-2'>{`${
          currentIndex + 1
        }/${filteredQuestions.length}`}</p>
        <p className='text-xl text-justify break-al whitespace-pre-line'>
          {currentQuestion?.question}
        </p>
      </div>
      <div
        className='block-b text-2xl p-5 text-black flex-grow flex items-center justify-center cursor-pointer'
        style={{ height: '50dvh' }}
        data-label={currentQuestion?.options[1]?.label}
        onClick={() => handleAnswer(currentQuestion?.options[1]?.label)}
      >
        {currentQuestion?.options[1]?.text.startsWith('http') ? (
          <img
            src={currentQuestion?.options[1]?.text}
            alt={`Option ${currentQuestion?.options[1]?.label}`}
            className='mt-14'
            style={{ maxWidth: '100%', maxHeight: '80%' }}
          />
        ) : (
          <p className='mt-14 break-all'>{currentQuestion?.options[1]?.text}</p>
        )}
      </div>

      <div
        className='w-full bg-gray-200 rounded absolute bottom-0 right-0'
        style={{ height: '2px' }}
      >
        <div
          className='absolute top-0 left-0 h-1 animate-pulse rounded bg-rose-400'
          style={{ width: progressBarWidth }}
        ></div>
      </div>
    </div>
  );
}

export default Question;
