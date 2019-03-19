import React from 'react';
import styled from 'styled-components';
import ImgPost from '../assets/post.png';

const PostCard = ({ post }) => {
	return (
		<Card>
			<h1>{post.title}</h1>
			<p>{post.contents}</p>
			<div>
				<button>Delete</button>
				<button>Update</button>
			</div>
		</Card>
	);
};

export default PostCard;

const Card = styled.div`
	width: 250px;
	height: 250px;
	border-style: double;
	margin: 20px;
	background-image: url(${ImgPost});
	padding: 10px;
	padding-bottom: 20px;
	position: relative;
	h1 {
		font-size: 20px;
		display: none;
	}
	p {
		display: none;
	}
	div {
		display: none;
	}

	&:hover {
		background: #008cba;

		opacity: 1;
		transition: .5s ease;
		p,
		h1,
		div {
			display: block;
		}
	}
`;
