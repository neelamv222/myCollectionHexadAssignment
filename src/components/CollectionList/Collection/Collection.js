import React from "react";
import StarRatingComponent from 'react-star-rating-component';

const Collection = (props) => {
    const { item: { name, rating, id }, onStarClick } = props;
    return (
        <li className="list-group-item row">
            <p className="collection-item col-4">{name}</p>
            <StarRatingComponent
                className="col-2"
                name={id}
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
            />
        </li>
    );
}

export default Collection;
