import React from 'react';

const Card = (props)=>{
	const cardPath = `cards/${props.card}.png`;
	return (
		<div className="col-sm-2 card">
			<img src={cardPath}/>
		</div>
	)
}

export default Card;