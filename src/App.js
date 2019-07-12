import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({catPics: state.pictures})

// let mapDispatchToProps = (dispatch) => ({
//   fetchCats: fetchCats
// })

export default connect(mapStateToProps, {fetchCats})(App)

