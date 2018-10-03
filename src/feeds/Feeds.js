import React from 'react';

const feeds = [
	{
		id: 1,
		description: 'feed1'
	},
	{
		id: 2,
		description: 'feed2'
	},
	{
		id: 1,
		description: 'feed3'
	},
]

export default () => (
	<div>
		{feeds.map(feed => (
			<div>
				feed details -
				<div>id : {feed.id}</div>
				<div>name : {feed.name}</div>
			</div>
		))}
	</div>
)