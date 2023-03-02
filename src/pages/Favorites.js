import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import BucketList from "../components/bucketlists/BucketList";
function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <BucketList bucketlists={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
