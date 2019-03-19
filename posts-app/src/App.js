import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList';
import axios from 'axios';

class App extends Component {
  state = {};
  
  componentDidMount(){
    axios.get('')
  }

	render() {
		return (
			<div className="App">
				<h1>Test</h1>
				<PostList />
			</div>
		);
	}
}

export default App;
