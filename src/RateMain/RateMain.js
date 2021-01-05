import React from "react";
import DataSection from "./DataSection";
import ReviewPage from "./ReviewPage";
// import "./MainContainer.css";

export default class RateMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setName: "",
      setId: null,
      selectedBrand: null,
      playExperience: 0,
      levelOfDifficulty: 0,
      valueOfMoney: 0,
      overallRate: 0,
      error: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(
    setName,
    setId,
    selectedBrand,
    playExperience,
    levelOfDifficulty,
    valueOfMoney,
    overallRate
  ) {
    if (setName !== "" && setId !== "" && selectedBrand !== "") {
      this.setState({
        showReview: true,
        setName: setName,
        setId: setId,
        selectedBrand: selectedBrand,
        overallRate: overallRate,
        playExperience: playExperience,
        levelOfDifficulty: levelOfDifficulty,
        valueOfMoney: valueOfMoney,
        error: false
      });
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      setName,
      setId,
      selectedBrand,
      playExperience,
      levelOfDifficulty,
      valueOfMoney,
      showReview,
      overallRate,
      error
    } = this.state;
    return (
      <div className="mainContainer">
        {!showReview && (
          <DataSection handleClick={this.handleClick} error={error} />
        )}
        {showReview && (
          <ReviewPage
            setName={setName}
            setId={setId}
            selectedBrand={selectedBrand}
            playExperience={playExperience}
            levelOfDifficulty={levelOfDifficulty}
            valueOfMoney={valueOfMoney}
            overallRate={overallRate}
          />
        )}
      </div>
    );
  }
}
