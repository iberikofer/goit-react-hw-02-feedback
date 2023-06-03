import React from 'react';

export default class Statistics extends React.Component {
  countTotalFeedback = () => {
    return this.props.total;
  };

  countPositiveFeedbackPercentage = () => {
    return this.props.positivePercentage.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div
        style={{
          padding: 15,
        }}
      >
        <br />
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Percentage of positive feedback:{' '}
          {this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}
