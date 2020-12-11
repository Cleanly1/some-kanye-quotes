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

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clock: new Date().toLocaleTimeString(),
		};
	}

	theTime = () => {
		this.setState({ clock: new Date().toLocaleTimeString() });
	};

	componentDidMount() {
		this.clockTimer = setInterval(() => {
			this.theTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.state.clockTimer);
	}

	render() {
		return (
			<StyledDiv>
				<Text>{this.state.clock}</Text>
			</StyledDiv>
		);
	}
}

export default Clock;
