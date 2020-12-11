import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
	width: 80%;
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
	width: 80%;
	padding: 3rem;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 5px;
`;

const ListItem = styled.li`
	padding: 5px;
	margin: 5px 0;
	border-bottom: solid 1px rgba(255, 255, 255, 0.4);
`;

const Quote = () => {
	const interval = 10;
	const [fade, setFade] = useState();
	const [quote, setQuote] = useState();
	const [quoteList, setQuoteList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const getQuote = () => {
		setLoaded(true);
		fetch("https://api.kanye.rest")
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				setFade(true);
				setTimeout(function () {
					setQuote(response.quote);
					let newQuoteList = quoteList;
					newQuoteList.push(response.quote);
					setTimeout(() => {
						setQuoteList(newQuoteList.reverse());
					}, 2000);
				}, 1000);
				setTimeout(function () {
					setFade(false);
				}, 1200);
			});
	};

	useEffect(() => {
		if (!loaded) {
			getQuote();
			setInterval(() => getQuote(), interval * 1000);
		}
	});

	return (
		<>
			<QuoteContainer>
				<QuoteText fade={fade}>{quote}</QuoteText>
			</QuoteContainer>

			<h1>List of your quotes:</h1>
			<QuoteList>
				{quoteList &&
					quoteList.map((quote, i) => {
						return <ListItem key={i}>{quote}</ListItem>;
					})}
			</QuoteList>
		</>
	);
};

export default Quote;
