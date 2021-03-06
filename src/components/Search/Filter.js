import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DebounceInput from 'react-debounce-input';

class Filter extends Component {
  // Add PropTypes validation
  static propTypes = {
    updateQuery: PropTypes.func.isRequired,
  }

  // App's internal state
  state = {
    inputValue: '',
  }

  updateInput = (inputValue) => {
    this.setState({ inputValue });
  }

  render() {
    const { inputValue } = this.state;
    const { updateQuery } = this.props;
    return (
      <label htmlFor="filter-text">
        <DebounceInput
          id="filter-text"
          type="text"
          role="search"
          placeholder="Search places by name"
          value={inputValue}
          debounceTimeout={1000}
          onChange={(event) => {
            this.updateInput(event.target.value);
            updateQuery(event.target.value);
          }}
        />
        <span id="filter-help">
          Filter
        </span>
      </label>
    );
  }
}

export default Filter;
