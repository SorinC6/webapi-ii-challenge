import React from 'react';
import PostCard from './PostCard';
import styled from 'styled-components';

const PostList = ({ posts }) => {
	return (
		<ListWrapper>
			{posts.map((post) => {
				return <PostCard post={post} />;
			})}
		</ListWrapper>
	);
};

export default PostList;

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	max-width: 80%;
	margin: 0 auto;
	padding: 20px;
`;
