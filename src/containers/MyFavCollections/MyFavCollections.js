import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { find, random } from "lodash";
import { getCollectionData, handleToggleBtnClick, starClickAction, setRandomTime } from "../../actions/myFavCollectionsActions";
import Collections from "../../components/CollectionList/Collections/Collections";
import RandomRatingBtn from "../../components/RandomRatingBtn/RandomRatingBtn"
import { STOP_RANDOM_RATING } from "../../constants";
import ReactInterval from "react-interval";

const favCollection = ["books", "movies", "games", "foods"];

class CollectionList extends Component {

    /** 
     * When component gets loaded, depending upon the pathname, it will show the particular category of collections.
     */
    componentDidMount() {
        const pathname = this.props.location.pathname.replace("/", "");
        const item = find(favCollection, (o) => o === pathname);
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
        console.log('randomRating', randomRating);
        const randomElement = random(1, 10);
        console.log('randomElement', randomElement);
        this.props.starClickAction(randomRating, randomElement);
    };

    // On star click, dispatch the action to update the rating for that particular item. 
    onStarClick = (nextValue, prevValue, name) => {
        this.props.starClickAction(nextValue, name);
    };

    renderCollectionData = () => {
        return (this.props.visible ?
            <Collections data={this.props.data} onStarClick={this.onStarClick} /> :
            <h3 className="loading">Loading...</h3>);
    };

    render() {
        const { text, randomData, data } = this.props;
        const { randomRating, randomItem, randomTime } = randomData || {};
        const randomItemName = find(data, (el) => Number(el.id) === randomItem);
        console.log('randomTime', randomTime);
        return (
            <div className="container">

                {/* Render the collection data*/}
                {this.renderCollectionData()}

                {/* When enabled, set the interval and call the callback when the time reach */}
                <ReactInterval timeout={randomTime * 1000} enabled={text === STOP_RANDOM_RATING}
                    callback={this.generateTimer} />
                {
                    text === STOP_RANDOM_RATING && (<p>The random rating <b>{randomRating}</b> is assigned to the random item
                        <b> {randomItemName ? randomItemName.name : ""}</b> after <b>{randomTime || "-"}</b> secs.
                    </p>)
                }

                {/* Render random rating button */}
                <RandomRatingBtn onRandomRatingBtnClick={this.onRandomRatingBtnClick} toggleBtnText={text} />
            </div>
        );
    }
}

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
