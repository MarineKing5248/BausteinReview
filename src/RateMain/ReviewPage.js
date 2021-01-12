import React from "react";
import FullBrick from "./FullBrick";
import HalfBrick from "./HalfBrick";
import FullStar from "./FullStar";
import HalfStar from "./HalfStar";
import EmptyStar from "./EmptyStar";
import EmptyBrick from "./EmptyBrick";
import "./ReviewPage.css";

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playExperienceStar: null,
      playExperienceHalfStar: null,
      levelOfDifficultyStar: null,
      levelOfDifficultyHalfStar: null,
      valueOfMoneyStar: null,
      valueOfMoneyHalfStar: null,
      layoutStar: null,
      layoutHalfStar: null,
      detailsStar: null,
      detailsHalfStar: null,
      overallRateStar: null,
      overallRateHalfStar: null
    };
  }

  componentDidMount() {
    const {
      playExperience,
      levelOfDifficulty,
      valueOfMoney,
      layout,
      details,
      overallRate
    } = this.props;

    this.setState({
      playExperienceStar: parseInt(playExperience / 2),
      playExperienceHalfStar: playExperience % 2,
      levelOfDifficultyStar: parseInt(levelOfDifficulty / 2),
      levelOfDifficultyHalfStar: levelOfDifficulty % 2,
      valueOfMoneyStar: parseInt(valueOfMoney / 2),
      valueOfMoneyHalfStar: valueOfMoney % 2,
      layoutStar: parseInt(layout / 2),
      layoutHalfStar: layout % 2,
      detailsStar: parseInt(details / 2),
      detailsHalfStar: details % 2,
      overallRateStar: parseInt(overallRate / 2),
      overallRateHalfStar: overallRate % 2
    });
  }

  buildBricks(number) {
    let stars = [];
    let i;
    for (i = 0; i < number; i++) {
      stars.push(<FullBrick />);
    }
    return stars;
  }

  buildHalfBrick(number) {
    if (number === 1) {
      return <HalfBrick />;
    }
  }

  buildEmptyBricks(number) {
    let stars = [];
    let i;
    for (i = 0; i < number; i++) {
      stars.push(<EmptyBrick />);
    }
    return stars;
  }

  buildStars(number) {
    let stars = [];
    let i;
    for (i = 0; i < number; i++) {
      stars.push(<FullStar />);
    }
    return stars;
  }

  buildHalfStar(number) {
    if (number === 1) {
      return <HalfStar />;
    }
  }

  buildEmptyStars(number) {
    let stars = [];
    let i;
    for (i = 0; i < number; i++) {
      stars.push(<EmptyStar />);
    }
    return stars;
  }

  ratingStars(ratingType, fullStarNumber, halfStarNumber, star = 0) {
    const enmtyStars = 5 - fullStarNumber - halfStarNumber;
    return (
      <div className="ratingBoxRow">
        <div className="ratingbricksTitle">{ratingType}:</div>
        <div className="ratingbricks">
          {star === 0 && this.buildBricks(fullStarNumber)}
          {star === 0 && this.buildHalfBrick(halfStarNumber)}
          {star === 0 && this.buildEmptyBricks(enmtyStars)}
          {star === 1 && this.buildStars(fullStarNumber)}
          {star === 1 && this.buildHalfStar(halfStarNumber)}
          {star === 1 && this.buildEmptyStars(enmtyStars)}
        </div>
      </div>
    );
  }

  render() {
    const { setName, setId, brandName, partsNumber } = this.props;
    const {
      playExperienceStar,
      playExperienceHalfStar,
      levelOfDifficultyStar,
      levelOfDifficultyHalfStar,
      valueOfMoneyStar,
      valueOfMoneyHalfStar,
      layoutStar,
      layoutHalfStar,
      detailsStar,
      detailsHalfStar,
      overallRateStar,
      overallRateHalfStar
    } = this.state;

    return (
      <div className="reviewPageContainer">
        <div className="ratingBox">
          <div className="ratingBoxTitle">
            {brandName}
            <span>&nbsp;&nbsp;</span>
            {setId}
            <span>&nbsp;&nbsp;</span>
            {setName}
          </div>
          <div className="ratingBoxTitle">
            零件数: <span>&nbsp;&nbsp;</span>
            {partsNumber}
          </div>
          {this.ratingStars(
            "拼装体验",
            playExperienceStar,
            playExperienceHalfStar
          )}
          {this.ratingStars(
            "拼装难度",
            levelOfDifficultyStar,
            levelOfDifficultyHalfStar
          )}
          {this.ratingStars("外观还原性", layoutStar, layoutHalfStar)}
          {this.ratingStars("细节", detailsStar, detailsHalfStar)}
          {this.ratingStars("性价比", valueOfMoneyStar, valueOfMoneyHalfStar)}
          {this.ratingStars("综合", overallRateStar, overallRateHalfStar, 1)}
        </div>
      </div>
    );
  }
}
