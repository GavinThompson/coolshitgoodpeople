/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way. 
*/

import React from 'react';
import { IndexLink } from 'react-router';

const CustomLogo = ({logoUrl, siteTitle}) => {
  return (
	<div id="logo">
		<IndexLink to={{pathname: "/"}}>

			<svg 
				className="header" 
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				aria-label="Cool Shit Good People"
			>
			<title>
				Cool Shit Good People
			</title>
			<desc>
				Shifting gradient logo/header for Cool Shit Good People
			</desc>

				<text x="0" y="0" dy="0"
					style={{fill:"url(#skyGradient)"}}>
					<tspan x="0" dy=".6em">
						COOL SHIT
					</tspan>
					<tspan x="0" dy="1.2em">
						GOOD PEOPLE
					</tspan>
					
				</text>
				
				<defs>
					<linearGradient id="skyGradient" x1="100%" y1="100%">
						<stop offset="0%" stopColor="rgba(0,0,255,0.9)" stopOpacity="0.5">
							<animate attributeName="stop-color" 
							values="rgba(173,216,230,0.9);
									rgba(0,0,255,0.9);
									rgba(255,0,0,0.9);
									rgba(255,0,0,0.9);
									rgba(0,0,0,0.9);
									rgba(255,0,0,0.9);
									rgba(255,0,0,0.9);
									rgba(128,0,128,0.9);
									rgba(173,216,230,0.9);" 
							dur="20s" 
							repeatCount="indefinite" />
						</stop>
						<stop offset="100%" stopColor="rgba(255,165,0,0.9)" stopOpacity="0.5">
							<animate attributeName="stop-color" 
							values="rgba(173,216,230,0.9);
									rgba(255,165,0,0.9);
									rgba(128,0,128,0.9);
									rgba(128,0,128,0.9);
									rgba(0,0,0,0.9);
									rgba(128,0,128,0.9);
									rgba(128,0,128,0.9);
									rgba(0,0,255,0.9);
									rgba(173,216,230,0.9);" 
							dur="20s" 
							repeatCount="indefinite" />
							
							<animate attributeName="offset" 
								values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95" 
								dur="20s" 
								repeatCount="indefinite" />
						</stop>
					</linearGradient>
				</defs>
			</svg>
			
		</IndexLink>
	</div>
  )
}

export default CustomLogo;