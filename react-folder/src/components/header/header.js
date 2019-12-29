import React from 'react';
import FadeIn from '../transitions/fade-in';

const Header = () => {
	return (
		<header className="App-header">
			<FadeIn in={true} duration={600} length={'30px'} direction={'bottom'}>
				{/* <h2>David M. Stanley Jr.</h2> */}
			</FadeIn>
			<FadeIn in={true} duration={600} length={'50px'} direction={'bottom'}>
				<h1>Game of Thrones Clicky Game</h1>
			</FadeIn>
		</header>
	);
};

export default Header;
