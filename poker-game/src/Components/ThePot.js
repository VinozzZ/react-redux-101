import React from 'react';

const ThePot = (props)=>{
	return(
		<div className="col-sm-4 col-sm-offset-4 playerBet">
			{props.wager}
		</div>
	)
}

export default ThePot;