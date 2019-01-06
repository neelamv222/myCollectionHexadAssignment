import React from "react";

import Collection from "../Collection/Collection"
import "./Collections.css"


const Collections = (props) => {

    //It will display the list of collections.
    const displayCollectionList = () => {
        if (props.data.length > 0) {
            return props.data.map((elem) => {
                return (
                    <Collection key={elem.id} item={elem} onStarClick={props.onStarClick} />
                )
            })
        }
    };

    return (
        <ul className="list-group">
            {displayCollectionList()}
        </ul>
    );

}

export default Collections;


