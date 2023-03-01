import { Route, Switch } from "react-router-dom";

import AllBucketListsPag from "./pages/AllBuketLists";
import NewBucketListPage from "./pages/NewBuketList";
import FavoritePage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <AllBucketListsPag />
        </Route>
        <Route path="/new-bucket-list">
          <NewBucketListPage />
        </Route>
        <Route path="/favorite">
          <FavoritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
