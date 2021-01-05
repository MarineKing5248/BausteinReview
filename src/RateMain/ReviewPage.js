import React from "react";
import FullBrick from "./FullBrick";
import HalfBrick from "./HalfBrick";
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

  buildStars(number) {
    let stars = [];
    let i;
    for (i = 0; i < number; i++) {
      stars.push(<FullBrick />);
    }
    return stars;
  }

  buildHalfStar(number) {
    if (number === 1) {
      return <HalfBrick />;
    }
  }

  ratingStars(ratingType, fullStarNumber, halfStarNumber) {
    return (
      <div className="ratingBoxRow">
        <div>{ratingType}:</div>
        <div className="ratingbricks">
          {this.buildStars(fullStarNumber)}
          {this.buildHalfStar(halfStarNumber)}
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
          {brandName}
          {setId}
          {setName}
          {partsNumber}
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
          {this.ratingStars("性价比", valueOfMoneyStar, valueOfMoneyHalfStar)}
          {this.ratingStars("外观还原性", layoutStar, layoutHalfStar)}
          {this.ratingStars("细节", detailsStar, detailsHalfStar)}
          {this.ratingStars("综合", overallRateStar, overallRateHalfStar)}
        </div>
      </div>
    );
  }
}
