import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'
import CatList from './CatList'

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
              <p>CatBook</p>
              <CatList catpics={this.props.catpics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//   return { fetchCats: () => dispatch(fetchCats()) }
// }

function mapStateToProps(state){
  return {catpics: state.cats.pictures}
}

export default (connect)(mapStateToProps, { fetchCats })(App)
