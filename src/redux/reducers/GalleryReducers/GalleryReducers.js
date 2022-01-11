import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showImage: false,
  showVideo: true,
};

const GallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    ImageGalleryAction: state => {
      state.showImage = true;
      state.showVideo = false;
    },

    VideoGalleryAction: state => {
      state.showImage = false;
      state.showVideo = true;
    },
  },
});

export default GallerySlice.reducer;

// Action
const {ImageGalleryAction, VideoGalleryAction} = GallerySlice.actions;

export const ImageGalleryAction2 = state => async dispatch => {
  try {
    dispatch(ImageGalleryAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};

export const VideoGalleryAction2 = state => async dispatch => {
  try {
    dispatch(VideoGalleryAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};
