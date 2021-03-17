import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function CharactersCard() {
	const { store, actions } = useContext(Context);
	//console.log("Fav", store.favorites);
	return (
		<div className="d-flex flex-nowrap overflow-auto">
			{store.characters.map((person, index) => {
				//console.log("person", person);
				return (
					<div className="card custom-card test my-4" key={index}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3rDeGqhfMHdVCkogR1csg3lVCVXv5PQ09Q&usqp=CAU"
						/>
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
									<i className="fas fa-heart" />
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
