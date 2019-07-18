import React, { Component} from 'react';

class CatList extends Component{
render(){
	console.log("catlist props=",this.props)
	const cats = this.props.catPics.map(picture => <img src={picture.url}/>)
	return (


		<div>
			{cats}
		</div>






		)






}


}
export default CatList