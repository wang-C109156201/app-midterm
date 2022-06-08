const ADD_REVIEW_NOTE = 'ADD_REVIEW_NOTE';
const TOGGLE_COLOR_MODE = 'TOGGLE_COLOR_MODE';
const REMOVE_REVIEW_NOTE = 'REMOVE_REVIEW_NOTE';
  
  const initialFavoriteBike = {
    notes: [],
  };
  const initialColorMode = { colorMode: "light" };
  
  export const colorModeReducer = (state = initialColorMode, action) => {
    switch (action.type) {
  
      case TOGGLE_COLOR_MODE:
        const colorMode =
          (state.colorMode == 'light')
            ? 'dark'
            : 'light';
        return { colorMode };
  
      default:
        return state;
    }
  }
  
  
  export const addRevReducer = (state = initialFavoriteBike, action) => {
    switch (action.type) {
  
      case ADD_REVIEW_NOTE:
        return {
          ...state, //copying original state
          notes: [ ...state.notes, action.payload ]
        };
      
      case REMOVE_REVIEW_NOTE:
        return {
          ...state,
          notes: state.notes.filter(notes => notes.ID !== action.payload)
        }
  
      default:
        return state;
    }
  }