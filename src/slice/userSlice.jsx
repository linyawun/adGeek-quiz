import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    type: '',
    score: 0,
    answerList: [],
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    addAnswerItem: (state, action) => {
      state.answerList.push(action.payload);
    },
    resetUser: (state) => {
      state.type = '';
      state.score = 0;
      state.answerList = [];
    },
  },
});
export const { setType, setScore, addAnswerItem, resetUser } =
  userSlice.actions;
export default userSlice.reducer;
