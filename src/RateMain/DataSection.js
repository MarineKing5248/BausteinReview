import React from "react";
import Select from "react-select";
// import './NameSection.css'

const options = [
  { value: "lego", label: "Lego" },
  { value: "cobi", label: "Cobi" }
];

export default class DataSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBrand: null,
      setName: "",
      setId: null,
      playExperience: 0,
      levelOfDifficulty: 0,
      valueOfMoney: 0,
      overallRate: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  }

  handleSelect = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { handleClick, error } = this.props;
    const {
      setName,
      setId,
      selectedBrand,
      playExperience,
      levelOfDifficulty,
      valueOfMoney,
      overallRate
    } = this.state;
    return (
      <div className="nameSectionContainer">
        <Select
          name="selectedBrand"
          value={selectedBrand}
          onChange={this.handleSelect}
          options={options}
        />

        <input
          name="setName"
          type="text"
          value={setName}
          placeholder="Enter the set name here..."
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
          name="playExperience"
          type="text"
          value={playExperience}
          placeholder="Enter the 0 - 5 rate for the playExperience..."
          onChange={this.handleChange}
        />

        <input
          name="levelOfDifficulty"
          type="text"
          value={levelOfDifficulty}
          placeholder="Enter the 0 - 5 rate for the levelOfDifficulty..."
          onChange={this.handleChange}
        />

        <input
          name="valueOfMoney"
          type="text"
          value={valueOfMoney}
          placeholder="Enter the 0 - 5 rate for the valueOfMoney..."
          onChange={this.handleChange}
        />

        <input
          name="overallRate"
          type="text"
          value={overallRate}
          placeholder="Enter the 0 - 5 rate for the overallRate..."
          onChange={this.handleChange}
        />

        <button
          onClick={() =>
            handleClick(
              setName,
              setId,
              selectedBrand,
              playExperience,
              levelOfDifficulty,
              valueOfMoney,
              overallRate
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
