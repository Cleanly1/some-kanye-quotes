import React from "react";
import Container from "./components/Container/Container";
import Clock from "./components/Clock/Clock";
import Quote from "./components/Quote/Quote";

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Hello!</h1>
				<h1>Here are some Kanye Quotes:</h1>
				<Quote />
				<Clock />
			</Container>
		</div>
	);
}

export default App;
