import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
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
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
