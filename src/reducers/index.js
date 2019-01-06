import { combineReducers } from "redux";

import MyFavCollectionReducer from "./MyFavCollectionsReducer";

const allReducers = combineReducers({
    collections: MyFavCollectionReducer
});

export default allReducers;