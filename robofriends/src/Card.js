import React from 'react';



const Card = () => {
	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="profile" src="https://robohash.org/test?200x200"/>
			<div>
				<h>name</h>
				<p>email@example.com</p>
			</div>
		</div>
		);
}

export default Card;