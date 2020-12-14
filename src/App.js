import React from "react";
import styled from "styled-components";
import Container from "./components/Container/Container";
import Clock from "./components/Clock/Clock";
import Quote from "./components/Quote/Quote";

const StyledP = styled.p`
	max-width: 80%;
	text-align: center;
`;

const StyledH1 = styled.h1`
	max-width: 80%;
	text-align: center;
`;

function App() {
	return (
		<div className="App">
			<Container>
				<StyledH1>Hello!</StyledH1>
				<StyledH1>Here are some Kanye Quotes:</StyledH1>
				<Quote />
				<Clock />
				<StyledP>
					And yes it will keep going and going{" "}
					<span role="img" aria-label="Winking emoij">
						😉
					</span>
				</StyledP>
			</Container>
		</div>
	);
}

export default App;
