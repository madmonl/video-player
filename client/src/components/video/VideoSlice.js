import { createSlice } from '@reduxjs/toolkit';
import { renderApp } from '../../';
import axios from 'axios';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    value: {
      video: {
        likes: null,
        views: null
      }
    }
  },
  reducers: {
    setVideoDetails: (state, action) => {
      state.value.video = action.payload;
    },
    increaseLikes: (state, action) => {
      state.value.video.likes = action.payload;
    }
  }
});

const { setVideoDetails, increaseLikes } = videoSlice.actions;

export const selectVideoDetails = (state) => state.video.value.video;

export function increaseLikesAsync() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/likes/increase');
    dispatch(increaseLikes(data));
    renderApp();
  };
}

export function setVideoDetailsAsync() {
  return async (dispatch) => {
    const { data } = await axios.get('/api/video');
    dispatch(setVideoDetails(data));
    renderApp();
  };
}

export default videoSlice.reducer;
