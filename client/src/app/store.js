import { configureStore } from '@reduxjs/toolkit';
import videoSliceReducer from '../components/video/VideoSlice';

export default configureStore({
  reducer: {
    video: videoSliceReducer
  }
});
