import { configureStore } from '@reduxjs/toolkit';
import videoSlice from '../components/video/VideoSlice';

export default configureStore({
  reducer: {
    video: videoSlice,
  },
});
