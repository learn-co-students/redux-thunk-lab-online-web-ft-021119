import React, {Component} from 'react'

class Class extends Component{
    
    generateCatPics(){
        return this.props.catPics.map(catPic => <img src={catPic.url}/>)
    }

    render(){
        return(
            <div>
                {this.generateCatPics()}
            </div>
        )
    }
}

export default Class