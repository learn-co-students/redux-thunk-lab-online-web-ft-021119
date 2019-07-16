import React, { Component } from 'react'

export default class CatList extends Component {

  renderCats = () => {
    if (!!this.props.catPics) {
      return this.props.catPics.map(cat => <img src={cat.url} key={cat.id} />)
    }
  }

  render () {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }
}
