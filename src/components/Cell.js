import React from 'react';

const getValue = (value) => {
  if (value === null) return '';
  return value ? 'X' : '0';
};

export default class Cell extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div
        className={(value !== null ? 'disabled' : '') + ' cell'}
        onClick={this.props.onClick}
      >
        {getValue(value)}
      </div>
    );
  }
}
