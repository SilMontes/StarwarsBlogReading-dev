import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function PlanetsCard() {
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
			{store.planets.map((planet, index) => {
				return (
					<div className="card custom-card test my-4" key={index}>
						<img className="card-img-top" src="http://placehold.jp/400x300.png" />
						<div className="card-body">
							<h5 className="card-title text-left">{planet.name}</h5>
							<div className="card-text text-left">
								<p>Population: {planet.population}</p>
								<p>Terrain: {planet.terrain}</p>
							</div>
							<div className="d-flex justify-content-between">
								<Link to={`/planet/${index}`}>
									<button className="btn btn-outline-primary">More Details!</button>
								</Link>
								<div
									className="favoritesContainer"
									onClick={() => {
										actions.addToFavoritesPlanets(planet.name);
									}}>
									{changeIconColor(planet.name)}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
