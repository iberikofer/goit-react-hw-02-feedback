import React from 'react';
import PropTypes from 'prop-types';

export default class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <h4>{message}</h4>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
