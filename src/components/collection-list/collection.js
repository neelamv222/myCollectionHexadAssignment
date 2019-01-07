import React from "react";
import { func, object } from "prop-types";
import StarRatingComponent from 'react-star-rating-component';
import { TOTAL_STAR_COUNT } from '../../constants';

const Collection = ({ item, onStarClick }) => {
    const { name, rating, id } = item;
    return (
        <li className="list-group-item row">
            <p className="collection-item col-4">{name}</p>
            <StarRatingComponent
                className="col-2"
                name={id}
                starCount={TOTAL_STAR_COUNT}
                value={rating}
                onStarClick={onStarClick}
            />
        </li>
    );
}

Collection.propTypes = {
    item: object,
    onStarClick: func
};

export default Collection;
