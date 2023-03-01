import { Route, Switch } from "react-router-dom";

import AllBucketListsPag from "./pages/AllBuketLists";
import NewBucketListPage from "./pages/NewBuketList";
import FavoritePage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllBucketListsPag />
        </Route>
        <Route path="/new-bucket-list">
          <NewBucketListPage />
        </Route>
        <Route path="/favorites">
          <FavoritePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
