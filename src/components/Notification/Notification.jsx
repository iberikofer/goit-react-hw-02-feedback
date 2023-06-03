import React from 'react';

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
