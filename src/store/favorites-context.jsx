import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetUpId) => {},
  itemIsFavorite: (meetUpId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([])

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => {
      return prevState.concat(favoriteMeetup)
    })
  }

  const removeFavoriteHandler = (meetUpId) => {
    setUserFavorites((prevState) => {
      return prevState.filter(meetup => meetup.id !== meetUpId)
    })
  }

  const itemIsFavoriteHandler = (meetUpId) => {
    return userFavorites.some(meetup => meetup.id === meetUpId)
  }

  const context = {
    favourites: userFavorites,
    totalFavourites: userFavorites.length ,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  }

  return <FavouritesContext.Provider value={context}>
    {props.children}
  </FavouritesContext.Provider>
}

export default FavouritesContext;
