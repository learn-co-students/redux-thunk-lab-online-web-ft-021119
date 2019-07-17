import React from 'react'

export default class CatList extends React.Component {

    renderCats = () => {
        const catImages = this.props.catPics.map(cat => {
            return <img src={cat.url} />
        })
        return catImages;
    }

    render() {
        return (
            <div>
                {this.renderCats()}
            </div>
        )
    }
}