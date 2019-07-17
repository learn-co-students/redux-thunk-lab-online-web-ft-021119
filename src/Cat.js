import React, { Component } from 'react';

class Cat extends Component {

  render() {
    const { cat } = this.props

      return (
        <div>
          <li>
            {cat}
          </li>
        </div>
      )
    }
  }

export default Cat;
