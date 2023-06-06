import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends React.Component {
  handleButtonClick = type => {
    this.props.onLeaveFeedback(type);
  };

  render() {
    const options = this.props.options;
    return (
      <div>
        <button
          type="button"
          className={css.button}
          style={{ backgroundColor: 'forestgreen' }}
          onClick={() => this.handleButtonClick(options[0])}
        >
          GOOD👍
        </button>
        <button
          type="button"
          className={css.button}
          onClick={() => this.handleButtonClick(options[1])}
        >
          NEUTRAL👌
        </button>
        <button
          type="button"
          className={css.button}
          style={{ backgroundColor: 'red' }}
          onClick={() => this.handleButtonClick(options[2])}
        >
          BAD👎
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
