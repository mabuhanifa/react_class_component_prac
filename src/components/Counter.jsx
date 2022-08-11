import React, { Component } from 'react';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {color: "red"};
      }
  render() {
    return (
      <div>Counter</div>
    )
  }
}
