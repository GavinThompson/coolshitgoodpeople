/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way. 
*/

import React from 'react';
import { IndexLink } from 'react-router';

const CustomFooter = (props) => {
	return (
		<footer className="love">
			<p>
				Made with <i className="fa fa-heart"></i> by <a href="http://www.coolshitgoodpeople.co">Cool Shit Good People</a>.
			</p>
		</footer>
	)
}

export default CustomFooter;