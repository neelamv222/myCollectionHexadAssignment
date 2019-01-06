import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { array, string, object, bool } from "prop-types";
import { find, random } from "lodash";

import { getCollectionData, handleToggleBtnClick, starClickAction, setRandomTime } from "../../actions/myFavCollectionsActions";
import Collections from "../../components/CollectionList/Collections/Collections";
import RandomRatingBtn from "../../components/RandomRatingBtn/RandomRatingBtn"
import RandomTimerGenerator from "../../components/RandomTimerGenerator/RandomTimerGenerator";
import { FAV_COLLECTION } from "../../constants";

class CollectionList extends Component {

    /** 
     * When component gets loaded, depending upon the pathname, it will show the particular category of collections.
     */
    componentDidMount() {
        const pathname = this.props.location.pathname.replace("/", "");
        const item = find(FAV_COLLECTION, (o) => o === pathname);
        this.props.getCollectionData(item);
    }

    // On randomRatingBtn click, dispatch the action to change the button text and set random data. 
    onRandomRatingBtnClick = () => {
        this.props.handleToggleBtnClick(random(5));
    };

    /** 
     * Generate random id and rating for the item in the list and dispatch action to update the random
     * item with the random rating.
     */
    generateTimer = () => {
        const randomRating = random(1, 5);
        const randomElement = random(1, 10);
        this.props.starClickAction(randomRating, randomElement);
    };

    // On star click, dispatch the action to update the rating for that particular item. 
    onStarClick = (nextValue, prevValue, name) => {
        this.props.starClickAction(nextValue, name);
    };

    renderCollectionDataSection = () => {
        return (this.props.visible ?
            <Collections data={this.props.data} onStarClick={this.onStarClick} /> :
            <h3 className="loading">Loading...</h3>);
    };

    render() {
        const { text, randomData, data } = this.props;
        const { randomRating, randomItem, randomTime } = randomData || {};
        const randomItemName = find(data, (el) => el.id === randomItem);
        return (
            <div className="container">

                {/* Render my fav collection data */}
                {this.renderCollectionDataSection()}

                {/* When enabled, set the interval and call the callback when the time reach */}
                <RandomTimerGenerator
                    randomTime={randomTime}
                    randomRating={randomRating}
                    randomItemName={randomItemName}
                    text={text}
                    generateTimer={this.generateTimer}
                />

                {/* Render random rating button section */}
                <RandomRatingBtn
                    onRandomRatingBtnClick={this.onRandomRatingBtnClick}
                    toggleBtnText={text}
                />
            </div>
        );
    }
}

CollectionList.propTypes = {
    visible: bool,
    data: array,
    text: string,
    randomData: object
};

function mapStatetoProps(state) {
    return {
        visible: state.collections.visible,
        data: state.collections.data,
        text: state.collections.text,
        randomData: state.collections.randomData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCollectionData, handleToggleBtnClick, starClickAction, setRandomTime }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(CollectionList);
