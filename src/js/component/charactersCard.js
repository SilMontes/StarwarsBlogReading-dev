import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function CharactersCard() {
	const { store, actions } = useContext(Context);
	//console.log("Fav", store.favorites);
	const changeIconColor = name => {
		const validate = store.favorites.findIndex(element => element == name);
		if (validate === -1) {
			return <i className="fas fa-heart" style={{ color: "yellow" }} />;
		} else {
			return <i className="fas fa-heart" style={{ color: " red " }} />;
		}
	};
	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{store.characters.map((person, index) => {
				//console.log("person", person);
				return (
					<div className="card custom-card test my-4" key={index}>
						<img className="card-img-top" src="http://placehold.jp/400x300.png" />
						<div className="card-body">
							<h5 className="card-title text-left">{person.name}</h5>
							<div className="card-text text-left">
								<p>Gender: {person.gender} </p>
								<p>Hair Color: {person.hair_color}</p>
								<p>Eye Color: {person.eye_color} </p>
							</div>
							<div className="d-flex justify-content-between">
								<Link to={`/people/${index}`}>
									<button className="btn btn-outline-primary" id={index}>
										More Details!
									</button>
								</Link>
								<div
									className="favoritesContainer"
									onClick={() => {
										actions.addToFavorites(person.name);
									}}>
									{changeIconColor(person.name)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
