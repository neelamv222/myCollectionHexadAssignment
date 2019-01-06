import React from "react";
import ReactInterval from "react-interval";

import { STOP_RANDOM_RATING } from "../../constants";

const RandomTimerGenerator = ({ randomTime, randomItemName, text, randomRating, generateTimer }) => {
    return (
        <div>
            <ReactInterval
                timeout={randomTime * 1000}
                enabled={text === STOP_RANDOM_RATING}
                callback={generateTimer}
            />

            {/*Display the random rating, random item name and random time when clicked on random rating button */}
            {
                text === STOP_RANDOM_RATING && (
                    <p>The random rating <b>{randomRating}</b> is assigned to the random item
                        <b> {randomItemName ? randomItemName.name : ""}</b> after <b>{randomTime || "-"}</b> secs.
                    </p>
                )
            }
        </div>
    )

}

export default RandomTimerGenerator;
