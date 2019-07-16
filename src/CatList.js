import React, { Component } from 'react'

export class CatList extends Component {
   renderCats = () => {
      if (!!this.props.catPics)
      {return this.props.catPics.map(cat => <img src={cat.url} key={cat.id} width="200px"/> )}
   }

   render() {
      return (
         <div>
            {this.renderCats()}
         </div>
      )
   }
}

export default CatList
