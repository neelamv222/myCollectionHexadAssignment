import myFavCollectionsService from "../service/myFavCollectionsService"
import { COLLECTION_LIST, TOGGLE_BTN_CLICKED, STAR_CLICK, SET_RANDOM_TIME } from "../constants";

export const getCollectionData = (item) => async (dispatch) => {
    try {
        const response = await myFavCollectionsService(item);
        dispatch({
            type: COLLECTION_LIST,
            payload: response.data
        })
    } catch (error) {
        console.error('Service Error:', error);
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
