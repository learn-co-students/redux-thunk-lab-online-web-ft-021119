import React, { Component } from 'react';

export default class CatList extends Component {

  renderCats = () => {
    console.log(this.props)
    let catImages = this.props.catPics.map((cat) => {
      return <img src={cat.url} />
    })
    console.log(catImages)
    return catImages
  }

  render() {
    return (
      <div>
      catlist
      {this.renderCats()}
      </div>
    )
  }
}
