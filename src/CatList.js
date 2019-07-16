import React, { Component } from 'react'

export default class CatList extends Component {

  render () {
    debugger
  const cats = this.props;
  const catList = cats.map(cat => {
    return (
      <img key={cat.id} url={cat.url} />
    )
  });

    return (
      <div>
        {catList}
      </div>
    )
  }
}
