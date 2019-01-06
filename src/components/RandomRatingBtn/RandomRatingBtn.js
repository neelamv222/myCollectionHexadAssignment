import React from "react";

import "./RandomRatingBtn.css"

const RandomRatingBtn = (props) => {
    return (
        <button type="button" className="btn btn-primary btn-lg toggle-btn" onClick={() => props.onRandomRatingBtnClick()}>{props.toggleBtnText}</button>
    )
}

export default RandomRatingBtn;
