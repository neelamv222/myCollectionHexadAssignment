import { orderBy, random } from "lodash";

import { COLLECTION_LIST, STAR_CLICK, START_RANDOM_RATING, TOGGLE_BTN_CLICKED, STOP_RANDOM_RATING, SET_RANDOM_TIME } from "../constants";

const initialState = {
    visible: false,
    text: START_RANDOM_RATING
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {

        case COLLECTION_LIST:
            return Object.assign({}, state,
                {
                    data: orderBy(payload, ['rating'], ['desc']),
                    visible: true
                }
            );

        case STAR_CLICK:
            const { id, value } = payload;
            const updatedRepo = state.data.map((repo) => {
                if (Number(repo.id) === Number(id)) {
                    return Object.assign({}, repo, {
                        rating: value
                    })
                }
                return repo;
            });
            return Object.assign({}, state, {
                data: orderBy(updatedRepo, ['rating', 'name'], ['desc', 'asc'])
            },
                {
                    randomData: {
                        ...state.randomData,
                        randomItem: id.toString(),
                        randomRating: value
                    }
                });

        case TOGGLE_BTN_CLICKED:
            if (state.text === START_RANDOM_RATING) {
                return Object.assign({}, state, {
                    text: STOP_RANDOM_RATING,
                    randomData: {
                        ...state.randomData,
                        randomTime: random(1, 5)
                    }
                })
            };
            return Object.assign({}, state, {
                text: START_RANDOM_RATING,
                randomData: {}
            });

        case SET_RANDOM_TIME:
            return Object.assign({}, state, {
                randomData: {
                    ...state.randomData,
                    randomTime: random(1, 5)
                }
            });
        default:
            return state;

    }
}
