import React from "react";
// import './NameSection.css'

export default class ReviewPage extends React.Component {
  render() {
    const {
      setName,
      setId,
      selectedBrand,
      playExperience,
      levelOfDifficulty,
      valueOfMoney
    } = this.props;
    return (
      <div className="nameSectionContainer">
        {setName}
        {setId}
        {selectedBrand}
        {playExperience}
        {levelOfDifficulty}
        {valueOfMoney}
      </div>
    );
  }
}
