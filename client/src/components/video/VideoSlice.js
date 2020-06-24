import { createSlice } from '@reduxjs/toolkit';
import { renderApp } from '..';
import axios from 'axios';

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    value: { forms: {} },
  },
  reducers: {
    setVideoDetails: (state, action) => {
      const { id } = action.payload;
      state.value.forms[id] = action.payload;
    },
  },
});

const { setVideoDetails } = videoSlice.actions;

export const setVideoDetailsAsync = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/video');
    dispatch(setVideoDetails(data));
    renderApp();
  };
};

export default videoSlice.reducer;
