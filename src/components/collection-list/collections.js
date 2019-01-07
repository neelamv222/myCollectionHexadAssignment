import React from "react";
import { func, array } from "prop-types";

import Collection from "./collection";


const Collections = ({ data, onStarClick }) => {

    //It will display the list of collections.
    const displayCollectionList = () => (
        data.map(elem => (<Collection key={elem.id} item={elem} onStarClick={onStarClick} />))
    );

    return (
        <ul className="list-group">
            {data && displayCollectionList()}
        </ul>
    );
}

Collections.propTypes = {
    data: array,
    onStarClick: func
};

export default Collections;
