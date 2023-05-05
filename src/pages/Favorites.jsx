import { useContext } from "react";

import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList"

const FavoritesPage = () => {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavourites === 0) {
    content = <p>You have no favorites, add some!</p>
  } else {
    content = <MeetupList meetups={favoriteCtx.favourites} />
  }

  return <section>
    <h1>My Favorites</h1>
    {content}
  </section>
}

export default FavoritesPage;
