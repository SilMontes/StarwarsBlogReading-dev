import React, { useContext } from "react";
import { NavDropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="navbar-brand mx-5" href="#">
					<img
						src="https://i.pinimg.com/originals/c8/1b/f1/c81bf1592fcd3734f0a38ae75f07ade3.jpg"
						width="50"
						height="50"
						className="d-inline-block align-top"
						alt=""
					/>
				</div>
			</Link>
			{/*se mostrará la cantidad de objetos que hay en el arreglo favorites declarado en store */}
			{/**Si favorites está vacío, se mostrará el mensaje Nothing here!; de lo contrario, se hará map al arreglo y se crearán NavDropdown.items por cada uno de los elementos en el favorites */}
			<DropdownButton variant="primary" title={"Favorites " + store.favorites.length}>
				{store.favorites.length == 0 ? (
					<NavDropdown.Item href="#action/3.1">Nothing here!</NavDropdown.Item>
				) : (
					store.favorites.map((favItem, ind) => {
						return (
							<NavDropdown.Item key={ind}>
								{favItem}
								<i
									className="fas fa-trash-alt"
									onClick={() => {
										actions.deleteFavorite(favItem);
									}}
								/>
							</NavDropdown.Item>
						);
					})
				)}
			</DropdownButton>
		</nav>
	);
};
