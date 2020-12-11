import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	position: fixed;
	bottom: -10px;
	right: 10px;
	transform: rotate(-90deg) translate(35px, 30px);

	@media (min-width: 1024px) {
		transform: rotate(0deg);
	}
`;

const Text = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
`;

const Clock = () => {
	const theTime = () => {
		const d = new Date();
		return d.toLocaleTimeString();
	};

	const [clock, setClock] = React.useState(theTime());

	React.useEffect(() => {
		const clockTimer = setInterval(() => {
			setClock(theTime());
		}, 1000);

		return () => {
			clearInterval(clockTimer);
		};
	});

	return (
		<StyledDiv>
			<Text>{clock}</Text>
		</StyledDiv>
	);
};

export default Clock;
