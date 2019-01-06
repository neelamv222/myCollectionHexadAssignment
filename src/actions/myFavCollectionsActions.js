import getReactRepos from "../service/getReactRepos"
import { COLLECTION_LIST, TOGGLE_BTN_CLICKED, STAR_CLICK, SET_RANDOM_TIME } from "../constants";

export const getCollectionData = (item) => async (dispatch) => {
    try {
        debugger;
        const response = await getReactRepos(item);
        dispatch({
            type: COLLECTION_LIST,
            payload: response.data
        })
    } catch (error) {
        console.error('getReactRepos Error:', error);
    }
};

export const handleToggleBtnClick = () => (dispatch, getState) => {
    dispatch({
        type: TOGGLE_BTN_CLICKED
    });
};

export const starClickAction = (value, id) => {
    return {
        type: STAR_CLICK,
        payload: { value, id }
    }
};

export const setRandomTime = () => {
    return {
        type: SET_RANDOM_TIME
    }
};
