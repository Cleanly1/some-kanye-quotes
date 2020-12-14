import React from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
	max-width: 80%;
	min-height: 20vh;
	padding: 3rem;
	background-color: rgba(0, 0, 0, 0.6);
	border-radius: 5px;

	@media (min-width: 1024px) {
		width: 50%;
	}
`;

const QuoteText = styled.h1`
	font-size: 1.5rem;
	opacity: ${(props) => (props.fade ? "0" : "1")};
	transition-duration: 1s;
`;

const QuoteList = styled.ul`
	list-style: none;
	margin: 0;
	max-width: 80%;
	padding: 3rem;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 5px;
`;

const ListItem = styled.li`
	padding: 5px;
	margin: 5px 0;
	border-bottom: solid 1px rgba(255, 255, 255, 0.4);
`;

const StyledH1 = styled.h1`
	max-width: 80%;
	text-align: center;
`;

class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			interval: 8,
			quote: "",
			fade: false,
			quoteList: [],
			quoteTime: 0,
			lengthOfList: 0,
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			let time = this.state.quoteTime;
			time -= 1;
			if (time < 0) {
				this.setState({ quoteTime: this.state.interval });
				this.getQuote();
			} else {
				this.setState({ quoteTime: time });
			}
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	getQuote() {
		fetch("https://api.kanye.rest")
			.then(function (response) {
				return response.json();
			})
			.then((response) => {
				this.setState({ fade: true });
				setTimeout(() => {
					this.setState({ quote: response.quote });
					setTimeout(() => {
						let newQuoteList = this.state.quoteList.reverse();
						newQuoteList.push(response.quote);
						newQuoteList = newQuoteList.reverse();
						this.setState({
							quoteList: newQuoteList,
							lengthOfList: this.state.lengthOfList + 1,
						});
					}, 1500);
				}, 1000);
				setTimeout(() => {
					this.setState({ fade: false });
				}, 1200);
			});
	}

	render() {
		return (
			<>
				<QuoteContainer>
					<QuoteText fade={this.state.fade}>
						{this.state.quote}
					</QuoteText>
				</QuoteContainer>
				<p>New quote in: {this.state.quoteTime}</p>
				<StyledH1>List of your quotes:</StyledH1>
				<QuoteList>
					{this.state.quoteList &&
						this.state.quoteList.map((quote, i) => {
							return (
								<ListItem key={i}>
									{this.state.lengthOfList - i}: {quote}
								</ListItem>
							);
						})}
				</QuoteList>
			</>
		);
	}
}

export default Quote;
