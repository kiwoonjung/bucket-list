import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteBucketList) => {},
  removeFavorite: (bucketListId) => {},
  itemIsFavorite: (bucketListId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteBucketList) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteBucketList);
    });
  }

  function removeFavoriteHandler(bucketListId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(
        (bucketList) => bucketList.id !== bucketListId
      );
    });
  }

  function itemIsFavoriteHandler(bucketListId) {
    return userFavorites.some((bucketList) => bucketList.id === bucketListId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
