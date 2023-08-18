import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'question',
  initialState: {
    initialQuestions: [
      {
        index: 0,
        question: '🌍 + 🔌 = ？',
        options: [
          { label: 'A', text: 'API ' },
          { label: 'B', text: 'WWW (World Wide Web)' },
        ],
        answer: 'A',
        type: 'general',
      },
      {
        index: 1,
        question: '🔍 + 🐛 = ？',
        options: [
          { label: 'A', text: 'Hot Fix' },
          { label: 'B', text: 'Debug' },
        ],
        answer: 'B',
        type: 'general',
      },
      {
        index: 2,
        question: '"response timeout" 可以用哪張圖表示意思？',
        options: [
          {
            label: 'A',
            text: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1582425520338.jpg',
          },
          { label: 'B', text: 'https://i.imgflip.com/4a9gtz.png?a469848' },
        ],
        answer: 'A',
        type: 'general',
      },
      {
        index: 3,
        question: 'cd /home 這個指令可以用哪張圖表示意思？',
        options: [
          {
            label: 'A',
            text: 'https://pic.pimg.tw/yogiiilovestea/1652632517-2050476746-g_n.jpg',
          },
          {
            label: 'B',
            text: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1588983119470.jpg',
          },
        ],
        answer: 'B',
        type: 'general',
      },
      {
        index: 4,
        question: '發現問題時，該如何快速地找到負(ㄓㄨㄚ)責(ㄓㄢˋ)人(ㄈㄢˋ)？',
        options: [
          { label: 'A', text: 'git blame' },
          { label: 'B', text: 'git log' },
        ],
        answer: 'A',
        type: 'general',
      },
      {
        index: 5,
        question: '🐘？',
        options: [
          { label: 'A', text: 'PHP' },
          { label: 'B', text: 'C++' },
        ],
        answer: 'A',
        type: 'backend',
      },
      {
        index: 6,
        question: 'PHP 程式題：\n$x = "10" + "20"; \n$x 為？',
        options: [
          { label: 'A', text: '30' },
          { label: 'B', text: '1020' },
        ],
        answer: 'A',
        type: 'backend',
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
        type: 'backend',
      },
      {
        index: 8,
        question: 'PHP 程式題：\n$a = 3;\n$b = &$a;\n$b = 7;\n\necho $a;',
        options: [
          { label: 'A', text: '3' },
          { label: 'B', text: '7' },
        ],
        answer: 'B',
        type: 'backend',
      },
      {
        index: 9,
        question: `SQL 程式題：\nSELECT COALESCE(NULLIF('A', 'A'), 'B');`,
        options: [
          { label: 'A', text: 'null' },
          { label: 'B', text: 'B' },
        ],
        answer: 'B',
        type: 'backend',
      },
      {
        index: 10,
        question: '在 JavaScript 中，哪個陣列方法會改變原始陣列的內容？',
        options: [
          { label: 'A', text: 'splice()' },
          { label: 'B', text: 'slice()' },
        ],
        answer: 'A',
        type: 'frontend',
      },
      {
        index: 11,
        question: 'Vue 的虛擬 DOM 主要有助於什麼？',
        options: [
          { label: 'A', text: '減少真實 DOM 的操作' },
          { label: 'B', text: '增加瀏覽器的渲染速度' },
        ],
        answer: 'A',
        type: 'frontend',
      },
      {
        index: 12,
        question: '以下哪個方法用於在陣列末尾添加新元素？',
        options: [
          { label: 'A', text: 'push()' },
          { label: 'B', text: 'unshift()' },
        ],
        answer: 'A',
        type: 'frontend',
      },
      {
        index: 13,
        question: '以下哪個方法可以用來創建 JavaScript 的深拷貝？',
        options: [
          { label: 'A', text: 'Object.assign()' },
          {
            label: 'B',
            text: `JSON.parse(JSON.stringify())`,
          },
        ],
        answer: 'B',
        type: 'frontend',
      },
      {
        index: 14,
        question: 'Array(3) 會創建什麼？',
        options: [
          { label: 'A', text: '一個包含 3 個 undefined 元素的陣列' },
          { label: 'B', text: '一個長度為 3，但沒有任何定義值的陣列' },
        ],
        answer: 'B',
        type: 'frontend',
      },
    ],
    filteredQuestions: [],
  },
  reducers: {
    setFilterQuestion(state, action) {
      state.filteredQuestions = state.initialQuestions.filter((question) => {
        return question.type === action.payload || question.type === 'general';
      });
    },
  },
});

export const { setFilterQuestion } = questionSlice.actions;

export default questionSlice.reducer;
