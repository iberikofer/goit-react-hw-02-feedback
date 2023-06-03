import React from 'react';

export default class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}
