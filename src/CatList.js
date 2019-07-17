import React, { Component } from 'react';

export default class CatList extends Component {

  renderCats = () => {
    console.log(this.props.catpics)
    if (this.props.catpics) {
      return this.props.catpics.map(cat => {
        return <img src={cat.url}/>})
    } else {
      return null
    }
  }


  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }
}
