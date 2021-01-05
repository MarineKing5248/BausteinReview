import React from "react";
import "./DataSection.css";

export default class DataSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandName: null,
      setName: null,
      setId: null,
      playExperience: null,
      levelOfDifficulty: null,
      valueOfMoney: null,
      overallRate: null,
      partsNumber: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { handleClick, error } = this.props;
    const {
      setName,
      setId,
      brandName,
      layout,
      details,
      playExperience,
      levelOfDifficulty,
      valueOfMoney,
      overallRate,
      partsNumber
    } = this.state;
    return (
      <div className="dataSectionContainer">
        <input
          name="brandName"
          type="text"
          value={brandName}
          placeholder="Enter the brand name here..."
          onChange={this.handleChange}
        />

        <input
          name="setId"
          type="text"
          value={setId}
          placeholder="Enter the set number here..."
          onChange={this.handleChange}
        />

        <input
          name="setName"
          type="text"
          value={setName}
          placeholder="Enter the set name here..."
          onChange={this.handleChange}
        />

        <input
          name="partsNumber"
          type="text"
          value={partsNumber}
          placeholder="Enter the number of parts here..."
          onChange={this.handleChange}
        />

        <input
          name="playExperience"
          type="text"
          value={playExperience}
          placeholder="Enter the 0 - 10 rate for the playExperience..."
          onChange={this.handleChange}
        />

        <input
          name="levelOfDifficulty"
          type="text"
          value={levelOfDifficulty}
          placeholder="Enter the 0 - 10 rate for the levelOfDifficulty..."
          onChange={this.handleChange}
        />

        <input
          name="valueOfMoney"
          type="text"
          value={valueOfMoney}
          placeholder="Enter the 0 - 10 rate for the valueOfMoney..."
          onChange={this.handleChange}
        />

        <input
          name="overallRate"
          type="text"
          value={overallRate}
          placeholder="Enter the 0 - 10 rate for the overallRate..."
          onChange={this.handleChange}
        />

        <input
          name="layout"
          type="text"
          value={layout}
          placeholder="Enter the 0 - 10 rate for the layout..."
          onChange={this.handleChange}
        />

        <input
          name="details"
          type="text"
          value={details}
          placeholder="Enter the 0 - 10 rate for the details..."
          onChange={this.handleChange}
        />

        <button
          onClick={() =>
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
            )
          }
        >
          Next
        </button>
        {error && (
          <div>Please input all the data which are needed for this review!</div>
        )}
      </div>
    );
  }
}
