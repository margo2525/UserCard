import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
	return (
		<div className="background">


			<ProfileCard
				name="Emma Watson"

				snick="@EmWatson"
				tweets="1,337"
				followers="718"
				following="561"
			></ProfileCard>
		</div >
	);
}

export default App;
