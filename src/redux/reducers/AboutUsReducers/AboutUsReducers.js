import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showAboutUs: true,
  showManagerSpeech: false,
  showOurBranches: false,
};

const AboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    AboutUsAction: state => {
      state.showAboutUs = true;
      state.showManagerSpeech = false;
      state.showOurBranches = false;
    },

    ManagerSpeechAction: state => {
      state.showAboutUs = false;
      state.showManagerSpeech = true;
      state.showOurBranches = false;
    },

    OurBranchesAction: state => {
      state.showAboutUs = false;
      state.showManagerSpeech = false;
      state.showOurBranches = true;
    },
  },
});

export default AboutUsSlice.reducer;

// Action
const {AboutUsAction, ManagerSpeechAction, OurBranchesAction} =
  AboutUsSlice.actions;

export const AboutUsAction2 = state => async dispatch => {
  try {
    dispatch(AboutUsAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};

export const ManagerSpeechAction2 = state => async dispatch => {
  try {
    dispatch(ManagerSpeechAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};

export const OurBranchesAction2 = state => async dispatch => {
  try {
    dispatch(OurBranchesAction(state));
  } catch (e) {
    return console.error(e.message);
  }
};
