import React from 'react';

const PostList = ({ posts }) => {
	return (
		<div>
			<p>Post List</p>
			{posts.map((post) => {
				return (
					<div>
						<h2>{post.title}</h2>
						<p>{post.contents}</p>
					</div>
				);
			})}
		</div>
	);
};

export default PostList;
