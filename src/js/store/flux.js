const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				const store = getStore();
				await fetch("https://www.swapi.tech/api/people/")
					.then(resp => resp.json())
					.then(respInfo => {
						setStore({ ...store, characters: respInfo.results });
						console.log(store.characters);
					})
					.catch(error => console.error("Error request people: ", error));
			},
			getPlanets: async () => {
				const store = getStore();
				await fetch("https://www.swapi.tech/api/planets/")
					.then(resp => resp.json())
					.then(respInfoPlanets => {
						setStore({ ...store, planets: respInfoPlanets.results });
						console.log(store.planets);
					})
					.catch(error => console.error("Error request people: ", error));
			},
			addToFavorites: name => {
				const store = getStore();
				store.characters.map(item => {
					if (item.name == name) {
						//console.log(item);
						//1. Accedo a todo lo que hay en store
						//2.Accedo al objeto favorito
						//3.Accedo a todo lo que hay favoritos y le agrego name
						setStore({ ...store, favorites: [...store.favorites, { name }] });
					}
				});
			},
			addToFavoritesPlanets: name => {
				const store = getStore();
				store.planets.map(item => {
					if (item.name == name) {
						setStore({ ...store, favorites: [...store.favorites, { name }] });
					}
				});
			},
			deleteFavorite: name => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(item => {
					return item.name != name;
				});
				setStore({ ...store, favorites: updateFavorites });
				//console.log(updatefavorites);
			}
		}
	};
};

export default getState;
