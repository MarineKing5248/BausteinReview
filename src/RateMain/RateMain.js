import React from "react";
import DataSection from "./DataSection";
import ReviewPage from "./ReviewPage";
// import "./MainContainer.css";

export default class RateMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setName: null,
      setId: null,
      brandName: null,
      layout: null,
      details: null,
      playExperience: null,
      levelOfDifficulty: null,
      valueOfMoney: null,
      overallRate: null,
      partsNumber: null,
      error: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(
    brandName,
    setId,
    setName,
    layout,
    details,
    playExperience,
    levelOfDifficulty,
    valueOfMoney,
    overallRate,
    partsNumber
  ) {
    if (setName !== "" && setId !== "" && brandName !== "") {
      this.setState({
        showReview: true,
        setName: setName,
        setId: setId,
        brandName: brandName,
        overallRate: overallRate,
        layout: layout,
        details: details,
        playExperience: playExperience,
        levelOfDifficulty: levelOfDifficulty,
        valueOfMoney: valueOfMoney,
        partsNumber: partsNumber,
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
      brandName,
      layout,
      details,
      playExperience,
      levelOfDifficulty,
      valueOfMoney,
      showReview,
      overallRate,
      partsNumber,
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
            brandName={brandName}
            playExperience={playExperience}
            levelOfDifficulty={levelOfDifficulty}
            valueOfMoney={valueOfMoney}
            overallRate={overallRate}
            layout={layout}
            details={details}
            partsNumber={partsNumber}
          />
        )}
      </div>
    );
  }
}
