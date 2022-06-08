const ADD_REVIEW_NOTE = 'ADD_REVIEW_NOTE';
const TOGGLE_COLOR_MODE = 'TOGGLE_COLOR_MODE';
const REMOVE_REVIEW_NOTE = 'REMOVE_REVIEW_NOTE';

export const addReviewnote = (notesInfo) => (dispatch) => {
    const item = {
        title: notesInfo.title,
        ID: notesInfo.ID,
        image: notesInfo.image,
    }
    dispatch({
        type: ADD_REVIEW_NOTE,
        payload: item,
    });
};

export const removeReviewnote = (noteID) => (dispatch) => {
    dispatch({
        type: REMOVE_REVIEW_NOTE,
        payload: noteID,
    })
}


export const toggleColorMode = () => (dispatch) => {
    dispatch({
        type: TOGGLE_COLOR_MODE,
    });
};