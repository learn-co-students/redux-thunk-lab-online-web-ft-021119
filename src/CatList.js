import React from 'react'

class CatList extends React.Component {

  showCats() {
    return this.props.catPics.map((cat, id) => <img src={cat.url} key={id} /> )
  }

   render() {
      return (
          <div>
              {this.showCats()}
          </div>
      )
  }
}
 export default CatList
