import { useEffect, useRef, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useScoreContext } from '../context/ScoreContext';
const questionData = [
  {
    index: 0,
    question: '🌍 + 🔌 ?',
    options: [
      { label: 'A', text: 'API' },
      { label: 'B', text: 'WWW' },
    ],
    answer: 'A',
    explanation: '🌍 表示應用程式與全球連接，🔌 表示接口或連接。',
  },
  {
    index: 1,
    question: '🐘 ?',
    options: [
      { label: 'A', text: 'PHP' },
      { label: 'B', text: 'C++' },
    ],
    answer: 'A',
    explanation: '因為 PHP 的標誌是一頭大象 (🐘)。',
  },
  {
    index: 2,
    question: '🔍 + 🐛',
    options: [
      { label: 'A', text: 'Hot Fix' },
      { label: 'B', text: 'Debug' },
    ],
    answer: 'B',
  },
  {
    index: 3,
    question: '哪個程式語言的官網宣稱他們是最好用的語言呢？',
    options: [
      { label: 'A', text: 'PHP' },
      { label: 'B', text: 'Python' },
    ],
    answer: 'A',
  },
  {
    index: 4,
    question: '做為一個 JavaScript 的程式開發者，0.1 + 0.2 = 0.3 嗎？',
    options: [
      { label: 'A', text: 'YES' },
      { label: 'B', text: 'NO' },
    ],
    answer: 'B',
  },
  {
    index: 5,
    question: `JavaScript 程式題：console.log(1 + '2' + '3') 的結果是？`,
    options: [
      { label: 'A', text: '123' },
      { label: 'B', text: '6' },
    ],
    answer: 'A',
  },
  {
    index: 6,
    question: 'PHP 程式題：$x = "10" + "20"; $x 為？',
    options: [
      { label: 'A', text: '30' },
      { label: 'B', text: '1020' },
    ],
    answer: 'A',
  },
  {
    index: 7,
    question:
      '在 SQL 中，哪一個語句用於確保從開始到目前為止的所有交易都永久地儲存在資料庫中？',
    options: [
      { label: 'A', text: 'COMMIT' },
      { label: 'B', text: 'SAVEPOINT' },
    ],
    answer: 'A',
  },
  {
    index: 8,
    question:
      '可以使用關鍵字 "var"、"let" 或 "const" 來宣告，可以是數字、字串、布林值或其他數據類型。請問是什麼？',
    options: [
      { label: 'A', text: '函數' },
      { label: 'B', text: '變數' },
    ],
    answer: 'B',
  },
  {
    index: 9,
    question:
      '一種 JavaScript 的特性，函數和變數組合。來創建私有變數和函數，不被外部訪問。可以實現封裝和模組化。請問是什麼？',
    options: [
      { label: 'A', text: '閉包' },
      { label: 'B', text: '函數庫' },
    ],
    answer: 'A',
  },
  {
    index: 10,
    question:
      '一種程式設計模式，於處理使用者或系統事件。在 JavaScript 中，用於回應頁面上的行為。可與 DOM 元素相關聯，請問是什麼？',
    options: [
      { label: 'A', text: '函數' },
      { label: 'B', text: '事件驅動程式設計' },
    ],
    answer: 'B',
  },
  {
    index: 11,
    question: '在 HTML5 中，哪個 API 能夠儲存跨瀏覽器會話的數據？',
    options: [
      { label: 'A', text: 'sessionStorage' },
      { label: 'B', text: 'localStorage' },
    ],
    answer: 'B',
  },
  {
    index: 12,
    question: 'Vue 的虛擬 DOM 主要有助於什麼？',
    options: [
      { label: 'A', text: '減少真實 DOM 的操作' },
      { label: 'B', text: '增加瀏覽器的渲染速度' },
    ],
    answer: 'A',
  },
];

function Question() {
  const navigate = useNavigate({ from: '/question' });
  const { score, setScore } = useScoreContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(20000);
  const answerList = useRef([]);
  const currentQuestion = questionData[currentIndex];
  useEffect(() => {
    setScore(0);
  }, [setScore]);
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

  const progressBarWidth = `${(timeRemaining / 20000) * 100}%`;

  const handleAnswer = (label) => {
    answerList.current.push(label);
    if (currentIndex >= questionData.length - 1) {
      const correctCount = answerList.current.filter((answer, index) => {
        console.log(answer, questionData[index].answer);
        return answer === questionData[index].answer;
      }).length;
      const totalScore = correctCount * (100 / questionData.length);
      setScore(totalScore);
      navigate({ to: `/result` });
    } else {
      setCurrentIndex((pre) => pre + 1);
      setTimeRemaining(20000);
    }
  };

  return (
    <div
      className='min-w-full flex flex-col justify-between relative'
      style={{ height: '100dvh' }}
    >
      <div
        className='bg-yellow-200 text-5xl p-5 flex-grow flex items-center justify-center cursor-pointer'
        style={{ height: '50dvh' }}
        data-label={currentQuestion.options[0].label}
        onClick={() => handleAnswer(currentQuestion.options[0].label)}
      >
        <p className='mb-14'>{currentQuestion.options[0].text}</p>
      </div>
      <div className='w-5/6 bg-primary border-2 border-white rounded px-4 py-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow-lg text-white'>
        {/* <div className='w-full bg-slate-100 h-2 rounded mb-10'>
          <div
            className='h-2 animate-pulse rounded bg-gradient-to-r from-green-500 to-blue-500'
            style={{
              width: progressBarWidth,
            }}
          ></div>
        </div> */}
        <p className='absolute text-xs bottom-0 right-0 text-indigo-200 m-2'>
          {`${currentIndex + 1}/${questionData.length}`}
        </p>
        <p className='text-xl text-justify'>{currentQuestion.question}</p>
      </div>
      <div
        className='bg-blue-200 text-5xl p-5 text-black flex-grow flex items-center justify-center cursor-pointer'
        style={{ height: '50dvh' }}
        data-label={currentQuestion.options[1].label}
        onClick={() => handleAnswer(currentQuestion.options[1].label)}
      >
        <p className='mt-14'>{currentQuestion.options[1].text}</p>
      </div>
      {/* <div className='h-full w-1 bg-gray-200 bg-slate-100 rounded absolute right-0 top-0'>
        <div
          className='absolute bottom-0 left-0 w-full animate-pulse rounded bg-rose-500'
          style={{ height: progressBarWidth }}
        ></div>
      </div> */}

      <div
        className='w-full  bg-gray-200 rounded absolute bottom-0 right-0'
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
