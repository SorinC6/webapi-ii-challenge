import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList';
import axios from 'axios';

class App extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/api/posts/')
			.then((res) => {
				//console.log(res.data)
				this.setState({ posts: res.data });
			})
			.catch((err) => console.log(err))
			.finally();
	}

	render() {
		return (
			<div className="App">
				<h1>Test</h1>
				<PostList posts={this.state.posts} />
			</div>
		);
	}
}

export default App;
